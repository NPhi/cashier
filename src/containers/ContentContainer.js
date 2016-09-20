import {connect} from 'react-redux';
import Content from '../components/Content';
import {changeName} from '../actions/BillActions';
import {wrapPerformBill} from '../utils/mapActionsToBillScope';
import {getProductById} from '../reducers/index';

const mapStateToProps = (state,ownProps) => ({
	bills: state.bills,
	isVisible: state.selectedIndex === ownProps.index,
	getProductById : (id) => getProductById(state,id),
});

const mapDispatchToProps = wrapPerformBill({
	changeName,
});


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Content);