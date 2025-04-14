import { BEAM_API } from "@/config/env";
import { getToken, setToken } from "@/lib/utils";
import axios from "axios";

export const beamApi = axios.create({
  baseURL: BEAM_API,
});

beamApi.interceptors.request.use(
  config => {
    const token = getToken();
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

beamApi.interceptors.response.use(
  response => response,
  error => {
    const token = getToken();
    if (error.response.status === 401 && !!token) {
      setToken("");
      window.location.href = "/signin";
    }

    return Promise.reject(error);
  },
);
