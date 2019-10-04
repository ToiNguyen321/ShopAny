import * as types from './Types';

const cart = [];
export const cartProducts = (state = cart, action) => {
   switch(action.types){
      case types.ADD_PRODUCT_TO_CART:
         let product = {id: action.idProduct};
         return state.push(product);
      case types.REMOVE_PRODUCT_TO_CART:
         state = state.map(element => {
            if(element.id !== action.idProduct)
               return element;
         });
         return state;
      default:
         return state;
   }
}