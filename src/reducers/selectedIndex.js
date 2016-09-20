const selectedIndex = (state = 0, action) => {
	switch(action.type){
		case 'SWITCH_BILL' : return action.index;
		case 'REMOVE_BILL' : const {index} = action;
							return index !== 0 ? index - 1 : index;
		case 'ADD_BILL' : return action.newIndex;
		default : return state;
	}
};

export default selectedIndex;