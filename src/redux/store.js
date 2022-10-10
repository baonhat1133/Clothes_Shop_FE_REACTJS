import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import adminSlice from "./adminSlice";
import productSlice from "./productSlice";
import cartSlice from "./cartSlice";
export default configureStore({
  reducer: {
    auth: authSlice.reducer,
    admin: adminSlice.reducer,
    product: productSlice.reducer,
    cart: cartSlice.reducer,
  },
});
