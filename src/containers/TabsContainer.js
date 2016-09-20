import {connect} from 'react-redux';
import ChromeTabs from '../components/ChromeTabs';
import {switchBill,addBill,removeBill} from '../actions/BillsActions';


const mapStateToProps = (state) => ({
	selectedIndex : state.selectedIndex,
	bills: state.bills,
});

export default connect(
	mapStateToProps,
	{switchBill,addBill,removeBill},
)(ChromeTabs);