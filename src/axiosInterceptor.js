import axios from "axios";
import jwtDecode from "jwt-decode";
const refreshToken = async () => {
  try {
    let res = await axios.post(
      process.env.REACT_APP_BASE_URL + "auth/refresh",
      {
        withCredentials: true,
      }
    );
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const CreateAxios = (user, dispatch, stateSuccess) => {
  const axiosJWT = axios.create();
  let date = new Date();
  const decodeToken = jwtDecode(user?.accessToken);
  axiosJWT.interceptors.request.use(
    async (config) => {
      //việc thực hiện trước khi gửi req
      if (decodeToken.exp < date.getTime() / 1000) {
        let data = await refreshToken();
        let refreshUser = {
          ...user,
          accessToken: data.accessToken,
        };
        dispatch(stateSuccess(refreshUser));
        config.headers["token"] = `Bearer ${data.accessToken}`;
      }
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );
};
