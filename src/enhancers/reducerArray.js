const removeBill = (state,action,reducer) => {
	return state.length === 1 ? [reducer(undefined,{})] :
								state.filter((b,i) => i !== action.index);
};

/**
 *
 *reducerArray is an enhancer 
 * @param reducer
 * @actionTypes : actionsCreators describe sepecially to the reducer.
 *
*/

const reducerArray = (reducer,actionTypes) => {
	return function(state = [reducer(undefined,{})],action){
		switch(action.type){
			case actionTypes.addToList : return [...state,reducer(undefined,{})];
			case actionTypes.removeFromList : return removeBill(state,action,reducer);
			case actionTypes.performInList : 
				const {index,action: innerAction} = action;
				return [
			        ...state.slice(0, index),
			        reducer(state[index], innerAction),
			        ...state.slice(index + 1)
		      	];
			default : return state;
		}
	}
};

export default reducerArray;