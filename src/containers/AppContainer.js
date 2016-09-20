import {connect} from 'react-redux';
import App from '../components/App';

const mapStateToProps = (state) => ({
	bills : state.bills,
});

export default connect(
	mapStateToProps,
	{},
)(App);