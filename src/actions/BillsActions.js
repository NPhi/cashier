export const switchBill = (index) => ({
	type: 'SWITCH_BILL',
	index,
});

export const addBill = (newIndex) => ({
	type: 'ADD_BILL',
	newIndex,
});

export const removeBill = (index) => ({
	type: 'REMOVE_BILL',
	index,
});

export const performInBill = (index,action) => ({
	type : 'PERFORM_IN_BILL',
	index,
	action,
});