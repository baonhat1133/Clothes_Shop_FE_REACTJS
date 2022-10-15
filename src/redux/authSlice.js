import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    login: {
      currentUser: null,
      isFetching: false,
      error: false,
    },
    register: {
      success: false,
      isFetching: false,
      error: false,
    },
    getAllUser: {
      allUser: null,
      error: false,
    },
    refreshToken: {
      newAccessToken: null,
      error: false,
    },
  },
  reducers: {
    loginStart: (state) => {
      state.login.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.login.isFetching = false;
      state.login.currentUser = action.payload;
      state.login.error = false;
    },
    loginError: (state) => {
      state.login.error = true;
    },
    registerStart: (state) => {
      state.register.isFetching = true;
    },
    registerSuccess: (state) => {
      state.register.isFetching = false;
      state.register.error = false;
      state.register.success = true;
    },
    registerError: (state) => {
      state.register.error = true;
      state.register.isFetching = false;
      state.register.success = false;
    },
    getAllUserSuccess: (state, action) => {
      state.getAllUser.allUser = action.payload;
      state.getAllUser.error = false;
    },
    getAllUserError: (state) => {
      state.getAllUser.error = true;
    },
    refreshTokenSuccess: (state, action) => {
      state.refreshToken.newAccessToken = action.payload;
    },
    refreshTokenError: (state) => {
      state.refreshToken.error = true;
    },
    logoutStart: (state) => {
      state.login.isFetching = true;
    },
    logoutSuccess: (state, action) => {
      state.login.isFetchingOut = false;
      state.login.currentUser = null;
      state.login.error = false;
    },
    logoutError: (state) => {
      state.login.error = true;
    },
  },
});
export const {
  loginStart,
  loginSuccess,
  loginError,
  registerSuccess,
  registerError,
  registerStart,
  getAllUserSuccess,
  getAllUserError,
  refreshTokenSuccess,
  refreshTokenError,
  logoutStart,
  logoutSuccess,
  logoutError,
} = authSlice.actions;
export default authSlice;
