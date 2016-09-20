import {combineReducers} from 'redux';
import quantityById from './quantityById';

/**
 *
 *It will be better if you have an array which store indexes of other state.
 *It will be useful in dealing with relationship tables.
 *
*/

function addedIds(state = [], action){
	switch(action.type){
		case 'ADD_TO_CART' : 
				if(typeof action.productId === 'undefined' || state.indexOf(action.productId) !== -1){
					return state;
				}
				return [...state, action.productId];
		default : return state;
	}
}

function lastestId(state = 0, action){
	switch(action.type){
		case 'ADD_TO_CART' : return action.productId;
		default : return state;
	}
}

const cart = combineReducers({
	addedIds,
	quantityById,
	lastestId,
})

export default cart;

// SELECTORS

export function getQuantity(state, id){
	return state.quantityById[id];
}

export function getAddedIds(state){
	return state.addedIds;
}

export function getLastestId(state){
	return state.lastestId;
}




