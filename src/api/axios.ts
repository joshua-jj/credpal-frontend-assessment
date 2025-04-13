import { BEAM_API } from "@/config/env";
import { getToken } from "@/lib/utils";
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