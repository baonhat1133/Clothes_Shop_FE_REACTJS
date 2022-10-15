import requestAxiosNotToken from "../utils/http";
import {
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
} from "../redux/authSlice";

export const loginUser = async (user, dispatch, navigate) => {
  dispatch(loginStart());
  try {
    const res = await requestAxiosNotToken.post("auth/checkLogin", user);
    dispatch(loginSuccess(res.data));
    if (res.data.other.role_id === 1) {
      navigate("/admin/dashboard");
    } else navigate("/");
  } catch (err) {
    dispatch(loginError());
  }
};

export const registerUser = async (user, dispatch, navigate) => {
  dispatch(registerStart());
  try {
    dispatch(registerSuccess());
    await requestAxiosNotToken.post("auth/register", user);
    navigate("/login");
  } catch (err) {
    dispatch(registerError());
  }
};

export const refreshToken = async (user_id, refreshToken, dispatch) => {
  try {
    let res = await requestAxiosNotToken.post("auth/refresh", {
      user_id: user_id,
      refreshToken: refreshToken,
    });
    dispatch(refreshTokenSuccess(res));
    return res.data;
  } catch (err) {
    dispatch(refreshTokenError());
  }
};

export let getAllUser = async (dispatch) => {
  try {
    let res = await requestAxiosNotToken.get("auth/getAllUser");
    dispatch(getAllUserSuccess(res.data));
  } catch (err) {
    dispatch(getAllUserError());
  }
};
export let logoutAcc = async (id, dispatch, requestTokenAxios) => {
  dispatch(logoutStart());
  try {
    await requestTokenAxios.post(`auth/logout/${id}`, id);
    dispatch(logoutSuccess());
  } catch (err) {
    dispatch(logoutError());
  }
};
export let logoutAccAdmin = async (
  id,
  dispatch,
  navigate,
  requestTokenAxios
) => {
  dispatch(logoutStart());
  try {
    await requestTokenAxios.post(`auth/logout/${id}`, id);
    dispatch(logoutSuccess());
    navigate("/");
  } catch (err) {
    dispatch(logoutError());
  }
};
