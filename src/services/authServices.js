import requestAxios from "../utils/http";
import axios from "axios";
import {
  loginStart,
  loginSuccess,
  loginError,
  registerSuccess,
  registerError,
  registerStart,
} from "../redux/authSlice";
import {
  adminLoginSuccess,
  adminLoginStart,
  adminLoginError,
} from "../redux/adminSlice";
export const loginUser = async (user, dispatch, navigate) => {
  dispatch(loginStart());
  try {
    const res = await requestAxios.post("auth/checkLogin", user);
    dispatch(loginSuccess(res.data));
    if (res.data.other.role_id === 1) {
      navigate("/admin");
    } else navigate("/");
  } catch (err) {
    dispatch(loginError());
  }
};

export const registerUser = async (user, dispatch, navigate) => {
  dispatch(registerStart());
  try {
    dispatch(registerSuccess());
    await requestAxios.post("auth/register", user);
    navigate("/login");
  } catch (err) {
    dispatch(registerError());
  }
};

export const loginAdmin = async (accessToken, dispatch, navigate, instance) => {
  dispatch(adminLoginStart());
  console.log(instance);
  try {
    // let roleAdmin = await requestAxios.post("auth/loginAdmin", {
    //   headers: {
    //     token: `Bearer ${accessToken}`,
    //   },
    // });
    // console.log(roleAdmin);
    await instance({
      url: process.env.REACT_APP_BASE_URL + "auth/loginAdmin",
      method: "post",
      headers: {
        token: `Bearer ${accessToken}`,
      },
    })
      .then((res) => {
        console.log(res.data);
        dispatch(adminLoginSuccess(res.data));
        console.log("then");
      })
      .catch(function (error) {
        console.log(error);
        console.log("catch await");
      });
  } catch (err) {
    dispatch(adminLoginError());
  }
};
