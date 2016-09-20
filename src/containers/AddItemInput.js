import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addToCart} from '../actions/CartActions';
import {wrapPerformBill,addIndexToDispatchProps} from '../utils/mapActionsToBillScope';
import {getProductIdByName} from '../reducers/index';

class AddItemInput extends Component {

	constructor(props){
		super(props);
		this.state = {
			quantity : '',
			name : '',
		};
	}

	componentWillReceiveProps({isVisible}){
		if(isVisible){
			this.focusQuantity();
		}
	}

	focusQuantity = () => {
		if(this.quantityInput !== null){
			this.quantityInput.focus();
		}
	};

	onChangeName = (e) => {
		this.setState({name : e.target.value});
	};

	onChangeQuantity = (e) => {
		this.setState({quantity : e.target.value});
	};

	handleSubmit = () => {
		const {quantity,name} = this.state;
		const {addToCart,getProductIdByName} = this.props;
		const productId = getProductIdByName(name);
		if(productId === undefined){
			throw Error("Can't find Product Id with " + name);
		}
		const intQuantity = parseInt(quantity,10);
		const intProductId = parseInt(productId,10);
		addToCart(intProductId,intQuantity);
	};

	render(){
		const {name,quantity} = this.state;
		return(
			<div>
				<input  type="text" value={quantity} 
						onChange={this.onChangeQuantity} 
						placeholder="số lượng" 
						ref={(ref) => {this.quantityInput = ref}} autoFocus/>
				<input type="text" value={name} onChange={this.onChangeName} placeholder="tên sản phẩm" />
				<button onClick={this.handleSubmit}>Cộng</button>
			</div>
		)
	}
}

const mapDispatchToProps = wrapPerformBill({
	addToCart,
});

const mapStateToProps = (state) => ({
	getProductIdByName: (name) => getProductIdByName(state,name),
	index: state.selectedIndex,
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
	addIndexToDispatchProps,
)(AddItemInput);