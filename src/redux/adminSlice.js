// import { createSlice } from "@reduxjs/toolkit";

// let adminSlice = createSlice({
//   name: "admin",
//   initialState: {
//     getAdminLogin: {
//       inforAdmin: null,
//       isFetching: false,
//       error: false,
//     },
//   },
//   reducers: {
//     adminLoginSuccess: (state, action) => {
//       state.getAdminLogin.inforAdmin = action.payload;
//       state.getAdminLogin.isFetching = false;
//       state.getAdminLogin.error = false;
//     },
//     adminLoginStart: (state) => {
//       state.getAdminLogin.isFetching = true;
//       state.getAdminLogin.error = false;
//     },
//     adminLoginError: (state) => {
//       state.getAdminLogin.isFetching = false;
//       state.getAdminLogin.error = true;
//     },
//   },
// });
// export const { adminLoginSuccess, adminLoginStart, adminLoginError } =
//   adminSlice.actions;
// export default adminSlice;
