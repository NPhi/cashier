function byQuantity(state = [], action){
	switch(action.type){
		case 'ADD_TO_CART' : return [...state, action.quantity];
		default : return state;
	}
}

function quantityById(state = {},action){
	switch(action.type){
		case 'ADD_TO_CART' :
					const { productId, quantity } = action;
					if(typeof productId === 'undefined' || productId === ''){
						throw new TypeError('Expected productId not empty');
					}
					if(typeof quantity !== 'number'){
						throw new TypeError('Expected quantity is a number');
					}
					return {...state, [productId] : byQuantity(state[productId],action)};
		case 'EDIT_QUANTITY' :
					const { id, newQuantity } = action;
					return {...state, [id] : byQuantity(newQuantity,{})};
		default : return state;
	}
}

export default quantityById;