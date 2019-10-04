import * as types from './Types';
export const actionAddProductToCart = (idProduct) => ({
   type: types.ADD_PRODUCT_TO_CART,
   idProduct
});

export const actionRemoveProductToCart = (idProduct) => ({
   type: types.REMOVE_PRODUCT_TO_CART,
   idProduct
})