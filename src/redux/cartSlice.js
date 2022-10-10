import { createSlice } from "@reduxjs/toolkit";

let cartSlice = createSlice({
  name: "cart",
  initialState: {
    addToCart: {
      selectProduct: null,
      amount: 0,
      totalMoney: 0,
    },
  },
  reducers: {
    addToCartSuccess: (state, action) => {
      state.addToCart.selectProduct = action.payload;
      state.addToCart.amount += 1;
      state.addToCart.totalMoney += action.payload.price;
    },
  },
});
export const { addToCartSuccess } = cartSlice.actions;
export default cartSlice;
