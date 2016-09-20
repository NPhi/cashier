import {combineReducers} from 'redux';
import products, * as fromProducts from './products';
import bills from './bills';
import selectedIndex from './selectedIndex';

export default combineReducers({
	bills,
	selectedIndex,
	products,
});

export function getProductIdByName(state,name){
	return fromProducts.getIdByName(state.products,name);
}


export function getProductById(state,id){
	return fromProducts.byId(state.products,id);
}