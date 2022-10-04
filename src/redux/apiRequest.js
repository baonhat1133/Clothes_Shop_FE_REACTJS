import axios from "axios";
import {
  loginStart,
  loginSuccess,
  loginError,
  registerSuccess,
  registerError,
  registerStart,
} from "./authSlice";
export const loginUser = async (user, dispatch, navigate) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("http://localhost:2504/auth/login", user);
    dispatch(loginSuccess(res.data));
    navigate("/");
  } catch (err) {
    dispatch(loginError());
  }
};

export const registerUser = async (user, dispatch, navigate) => {
  dispatch(registerStart());
  try {
    dispatch(loginSuccess());
    await axios.post("http://localhost:2504/auth/register", user);
    navigate("/login");
  } catch (err) {
    dispatch(registerError());
  }
};
