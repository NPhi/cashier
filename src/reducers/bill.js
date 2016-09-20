import {combineReducers} from 'redux';
import cart from './cart';

const name = (state = '', action) => {
	switch(action.type){
		case 'CHANGE_NAME_BILL' : return action.name;
		default : return state;
	}
};

//each bill has a stable, predictable,unique id
const id = (state = Date.now(), action) => {
	switch(action.type){
		default : return state;
	}
};

export default combineReducers({
	id,
	name,
	cart,
});