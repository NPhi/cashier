import {createStore,applyMiddleware } from 'redux';
import reducer from './reducers';
import {init,getAllProducts} from './ProductData';

const logger = store => next => action => {
	console.log('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    return result
}

const configStore = () => {
	init();
	const persistedState = {
		products : getAllProducts(),
	};

	let store = createStore(reducer,persistedState,applyMiddleware(logger));

	return store;
}



export default configStore;