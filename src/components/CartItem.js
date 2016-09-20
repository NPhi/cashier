import React from 'react';

const CartItem = ({name,quantity,price}) => {
	return (
		<li>
			{quantity} - {name} - {price}
		</li>
	);
}

export default CartItem;