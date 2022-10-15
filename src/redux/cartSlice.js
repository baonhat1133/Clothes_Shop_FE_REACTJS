import { createSlice } from "@reduxjs/toolkit";

let cartSlice = createSlice({
  name: "cart",
  initialState: {
    addToCart: {
      selectProduct: [],
    },
    deletePrdCart: {
      success: false,
    },
    updateAmount: {
      success: false,
    },
  },
  reducers: {
    addToCartSuccess: (state, action) => {
      let product = action.payload;
      let cart = state.addToCart.selectProduct;
      if (cart.lenght !== 0) {
        let checkEmpty = cart.some((prd) => {
          return prd.id === product.id;
        });
        if (!checkEmpty) {
          state.addToCart.selectProduct = [...cart, product];
        }
      }
      // if (!action.payload) {
      //   state.addToCart.selectProduct = [];
      // }
      else state.addToCart.selectProduct.push(product);
    },
    addToCartRefresh: (state) => {
      state.addToCart.selectProduct = [];
    },
    deletePrdCartSuccess: (state, action) => {
      let cart = state.addToCart.selectProduct;
      let newCart = [];
      if (cart.lenght !== 0) {
        newCart = cart.filter((prd) => {
          return prd.id !== action.payload;
        });
      }
      state.addToCart.selectProduct = [...newCart];
      state.deletePrdCart.success = true;
    },
    updateAmountSuccess: (state, action) => {
      let cart = state.addToCart.selectProduct;
      let newCart = [];
      if (cart?.lenght !== 0) {
        newCart = cart?.map((prd) => {
          if (prd.id === action.payload.id && action.payload.click === "+") {
            return { ...prd, amount: prd.amount + 1 };
          }
          if (
            prd.id === action.payload.id &&
            action.payload.click === "-" &&
            prd.amount >= 2
          ) {
            return { ...prd, amount: prd.amount - 1 };
          } else return prd;
        });
      }
      state.addToCart.selectProduct = newCart;
      state.updateAmount.success = true;
    },
  },
});
export const {
  addToCartSuccess,
  deletePrdCartSuccess,
  updateAmountSuccess,
  addToCartRefresh,
} = cartSlice.actions;
export default cartSlice;
