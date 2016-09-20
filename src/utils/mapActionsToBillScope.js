import {performInBill} from '../actions/BillsActions';
import curry from 'lodash/fp/curry';
import mapValues from 'lodash/mapValues';

const bindActionCreator= (actionCreator,dispatch,index) => {
	return (...args) => dispatch(performInBill(index,actionCreator(...args)));
};

/**
 *
 * wrap a Container Component with PerformBill Action
 *@param {Function} actionCreators return an object whose values are action creator functions.
 *
 *@param {Function} dispatch The `dispatch` function available on Redux
 *
 *@param {Object} OwnProps of the wrapped component, required to have `index` prop
 *
 @returns {Object|Function} an object mimic the original actionCreators object, but with every action creator
 * wrapped into the `dispatch` call with the index prop. If `index` prop is undefined, every action creator will be a function
 * taking one paramater `index` to fultill it's implementation.
 *
*/

export const wrapPerformBill = curry((actionCreators,dispatch,{index}) => {
  	return mapValues(actionCreators,actionCreator => {
  		if (typeof actionCreator !== 'function') {
  				throw new TypeError("actionCreator expected to be function");
  		}
  		return index !== undefined ?
	    	 bindActionCreator(actionCreator,dispatch,index) :
	    	 index => bindActionCreator(actionCreator,dispatch,index);
  	});
});

/**
 *
 * apply `index` state to dispatchProps which are wrapped with the parent reducer scope.
 *@param {Object} stateProps required `index` state

 *@param {Object} dispatchProps are functions with one paramater `index` which will fulfill the original action creators

 *@param {Object} ownProps are passed by the parent component

 *@returns {Object} an object which contain all props of the wrapped component
 *
*/

export function addIndexToDispatchProps(stateProps, dispatchProps, ownProps) {
	const {index,...other} = stateProps;

	if(index === undefined){
		throw new Error('expected `index` state in the wrapped component');
	}

	const mergeProps = mapValues(dispatchProps,curryProp =>  curryProp(index));

  	return Object.assign({}
  			,ownProps
  			,other
  			,mergeProps
  		);
}
