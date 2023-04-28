import { useReducer } from "react";

import CartContext from "./cart-context";


const defaultCartState = {
  items: [],
  totalAmount: 0,
};


const cartReducer = (state , action) => {
  if(action.type === 'ADD'){
      const updatedItem = state.items.concat(action.item)
      const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount
      return {
        items : updatedItem ,
        totalAmount: updatedTotalAmount
      }
  }
  return  defaultCartState
}


const CartProvider = (props) => {
  const [cartState , dispathCartAction]  =  useReducer(cartReducer , defaultCartState)

  const addItemToCartHandler = (item) => {
    dispathCartAction({type : 'ADD' , item : item})
  };

  const removeItemFromCartHandler = (id) => {
    dispathCartAction({ type: "REMOVE", id: id });

  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
