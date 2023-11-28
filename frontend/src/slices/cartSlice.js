import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("cart") ? JSON.parse
(localStorage.getItem("cart")): {cartItems: []};

const addDecimals = num => {
  return (Math.round(num * 100) / 100).toFixed(2);
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state,action) => {
      const item = action.payload;
      const existItem = state.cartItems.find((x) => {
        x._id === item._id;
      });
      if (existItem) {
        state.cartItems = state.cartItems.map((x) => x._id === existItem._id ? item : x)
        } else {
          state.cartItems = [...state.cartItems, item];
        }

      // calculate item price shipping, tax & total price
      state.itemsPrice = addDecimals(state.cartItems.reduce((acc,item) => {
        return acc += item.price * item.qty;
      },0));

      // calculate shipping price (orders over $100 free otherwise $10)
      state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 10);

      // calculate tax price 
      state.taxPrice = addDecimals(Number((0.15 * state.itemsPrice).toFixed(2)));

      // calculate total price
      state.totalPrice = (
        Number(state.itemsPrice) + 
        Number(state.shippingPrice) + 
        Number(state.taxPrice)
      ).toFixed(2); 

      localStorage.setItem('cart', JSON.stringify(state));
    }
  }
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;