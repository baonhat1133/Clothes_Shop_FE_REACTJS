import axios from "axios";
import jwtDecode from "jwt-decode";
import { refreshToken } from "../services/authServices";
import { loginSuccess } from "../redux/authSlice";
const requestAxiosNotToken = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});
export let CreateAxios = async (user, dispatch, accesstokenAd) => {
  let requestAxios = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
      token: `Bearer ${accesstokenAd}`,
    },
  });
  let date = new Date();
  const decodeToken = jwtDecode(user?.accessToken);
  requestAxios.interceptors.request.use(
    async (config) => {
      //việc thực hiện trước khi gửi req
      if (decodeToken.exp < date.getTime() / 1000) {
        let data = await refreshToken(
          user.other.id,
          user.refreshToken,
          dispatch
        );
        let refreshUser = {
          ...user,
          accessToken: data.accessToken,
          refreshToken: data.refreshToken,
        };
        dispatch(loginSuccess(refreshUser));
        // config.headers["token"] = `Bearer ${data.accessToken}`;
        config = {
          headers: {
            token: `Bearer ${refreshUser?.accessToken}`,
          },
        };
        // requestAxios.headers.token = `Bearer ${data.accessToken}`;
      }
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );
  return requestAxios;
};

export default requestAxiosNotToken;
