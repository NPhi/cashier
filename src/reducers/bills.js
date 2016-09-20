import reducerArray from '../enhancers/reducerArray';
import bill from './bill';

const bills = reducerArray(bill,{
	addToList : 'ADD_BILL',
	removeFromList :'REMOVE_BILL',
	performInList : 'PERFORM_IN_BILL',
});

export default bills;