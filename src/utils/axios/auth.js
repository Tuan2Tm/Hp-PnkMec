import axios from "axios";
import { refreshTokens } from "src/api/auth";
import {
  getAccessToken,
  getRefreshToken,
  setAccessToken,
  setRefreshToken,
} from "../localStorage";
import { toast } from "react-hot-toast";
import { isExpired, jwt_decode } from "../base";

export const AuthService = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 20000,
});

AuthService.interceptors.request.use(
  async (config) => {
    // Lấy refresh token từ LS
    const refreshToken = getRefreshToken();
    if (refreshToken) {
      let expRefreshToken = jwt_decode(refreshToken).exp;
      if (!isExpired(expRefreshToken)) {
        const accessToken = getAccessToken();
        if (!accessToken) {
          await refreshTokens({
            refreshToken,
          }).then((res) => {
            setAccessToken(res.access.token);
            setRefreshToken(res.refresh.token);
          });
        } else {
          let dateTimeExpToken = jwt_decode(accessToken).exp;
          if (isExpired(dateTimeExpToken)) {
            // Handle refresh tokens
            await refreshTokens({
              refreshToken,
            }).then((res) => {
              setAccessToken(res.access.token);
              setRefreshToken(res.refresh.token);
            });
          }
        }
        config.headers.Authorization = "Bearer " + getAccessToken();
      }
    }

    return config;
  },
  (error) => {
    console.log(error);

    return Promise.reject(error);
  }
);

AuthService.interceptors.response.use(
  (response) => {
    return response.data;
  },
  async (error) => {
    console.log(error);
    toast.error(error.response.data.message || "Network Error");

    return Promise.reject(error);
  }
);
