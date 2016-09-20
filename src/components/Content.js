import React from 'react';
import AddItemInput from '../containers/AddItemInput';
import classNames from 'classnames';
import CartItem from './CartItem';

const Content = ({bill,isVisible,changeName,getProductById}) => {
	const {cart} = bill;
	return (
		<div className={classNames({'offscreen' : !isVisible})}>
			<input type="text" value={bill.name} onChange={(e) => changeName(e.target.value)} />
			<AddItemInput isVisible={isVisible} />
			<div>
				{
					cart.addedIds.map((id) => {
						const quantity = cart.quantityById[id].join('+');
						const {name,price} = getProductById(id);
						return <CartItem key={id} name={name} price={price} quantity={quantity} />
					})
				}
			</div>
		</div>
	);		
}

export default Content;