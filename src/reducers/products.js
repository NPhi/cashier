import findKey from 'lodash/findKey';

const products = (state = {}, action) => {
	switch(action.type){
		case 'GET_ALL' : return action.products;
		case 'ADD_PRODUCT' : 	const {name,price} = action;
								return {...state, 111 : {name,price} } ;
		case 'EDIT_PRODUCT' : 	const {id, newPrice} = action;
								return {...state, [id] : {...state[id],price : newPrice} };
		default : return state;
	}
};

//SELECTORS
const getIdByName = (state, name) => {
	return findKey(state,(product) => product.name === name )
}


const byId = (state,id) => {
	return state[id];
}

export default products;

export {
	getIdByName,
	byId
};
