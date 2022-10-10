import { createSlice } from "@reduxjs/toolkit";

let productSlice = createSlice({
  name: "product",
  initialState: {
    createProduct: {
      createPrd: false,
      isFetching: false,
      error: false,
    },
    getAllProduct: {
      allProduct: null,
      isFetching: false,
      error: false,
    },
    updateProduct: {
      updatePrd: false,
      isFetching: false,
      error: false,
    },
    deleteProduct: {
      delelePrd: false,
      isFetching: false,
      error: false,
    },
  },
  reducers: {
    createPrdSuccess: (state) => {
      state.createProduct.createPrd = true;
      state.createProduct.isFetching = false;
      state.createProduct.error = false;
    },
    createPrdStart: (state) => {
      state.createProduct.isFetching = true;
      state.createProduct.error = false;
    },
    createPrdError: (state) => {
      state.createProduct.isFetching = false;
      state.createProduct.error = true;
    },
    getAllProductSuccess: (state, action) => {
      state.getAllProduct.allProduct = action.payload;
      state.getAllProduct.isFetching = false;
      state.getAllProduct.error = false;
    },
    getAllProductStart: (state) => {
      state.getAllProduct.isFetching = true;
      state.getAllProduct.error = false;
    },
    getAllProductError: (state) => {
      state.getAllProduct.isFetching = false;
      state.getAllProduct.error = true;
    },
    updateProductSuccess: (state) => {
      state.updateProduct.updatePrd = true;
      state.updateProduct.isFetching = false;
      state.updateProduct.error = false;
    },
    updateProductStart: (state) => {
      state.updateProduct.isFetching = true;
      state.updateProduct.error = false;
    },
    updateProductError: (state) => {
      state.updateProduct.isFetching = false;
      state.updateProduct.error = true;
    },
    deleteProductSuccess: (state) => {
      state.deleteProduct.deletePrd = true;
      state.deleteProduct.isFetching = false;
      state.deleteProduct.error = false;
    },
    deleteProductStart: (state) => {
      state.deleteProduct.isFetching = true;
      state.deleteProduct.error = false;
    },
    deleteProductError: (state) => {
      state.deleteProduct.isFetching = false;
      state.deleteProduct.error = true;
    },
  },
});
export const {
  createPrdSuccess,
  createPrdStart,
  createPrdError,
  getAllProductSuccess,
  getAllProductStart,
  getAllProductError,
  updateProductSuccess,
  updateProductStart,
  updateProductError,
  deleteProductSuccess,
  deleteProductStart,
  deleteProductError,
} = productSlice.actions;
export default productSlice;
