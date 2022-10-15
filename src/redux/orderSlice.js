import { createSlice } from "@reduxjs/toolkit";

let orderSlice = createSlice({
  name: "order",
  initialState: {
    getAllOrder: {
      allOrder: null,
      error: false,
    },
    createOrder: {
      success: false,
      error: false,
    },
    updateOrder: {
      success: false,
      error: false,
    },
    getAllOrderAdmin: {
      allOrderAdmin: null,
      error: false,
    },
  },
  reducers: {
    getAllOrderSuccess: (state, action) => {
      state.getAllOrder.allOrder = action.payload;
    },
    getAllOrderError: (state) => {
      state.getAllOrder.error = true;
    },
    createOrderSuccess: (state) => {
      state.createOrder.success = true;
    },
    createOrderError: (state) => {
      state.createOrder.error = true;
    },
    updateOrderSuccess: (state) => {
      state.updateOrder.success = true;
    },
    updateOrderError: (state) => {
      state.updateOrder.error = true;
    },
    getAllOrderAdminSuccess: (state, action) => {
      state.getAllOrderAdmin.allOrderAdmin = action.payload;
    },
    getAllOrderAdminError: (state) => {
      state.getAllOrderAdmin.error = true;
    },
  },
});

export const {
  getAllOrderSuccess,
  getAllOrderError,
  createOrderSuccess,
  createOrderError,
  updateOrderSuccess,
  updateOrderError,
  getAllOrderAdminSuccess,
  getAllOrderAdminError,
} = orderSlice.actions;
export default orderSlice;
