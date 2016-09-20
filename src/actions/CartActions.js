export const addToCart = (productId, quantity) => ({
	type : 'ADD_TO_CART',
	productId,
	quantity
});

export const editQuantity = (id, newQuantity) => ({
	type : 'EDIT_QUANTITY',
	id,
	newQuantity,
});