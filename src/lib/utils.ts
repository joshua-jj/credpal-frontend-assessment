import queryClient from "@/config/tansack-query";
import { clsx, type ClassValue } from "clsx";
import { store } from "@/lib/redux/store";
import { twMerge } from "tailwind-merge";
import { updateUserToken } from "./redux/slices/authSlice";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const getToken = () => {
  const { getState } = store;
  return getState().auth.userToken;
};

export const setToken = (token: string) => {
  const { dispatch } = store;
  dispatch(updateUserToken(token));
};

export const removeToken = () => {
  const { dispatch } = store;
  dispatch(updateUserToken(""));
};

export const invalidateQueries = (queryKeys: string | string[]) => {
  if (Array.isArray(queryKeys)) {
    queryKeys.map(key => {
      queryClient.invalidateQueries({ queryKey: [key] });
    });
    return;
  }
  queryClient.invalidateQueries({ queryKey: [queryKeys] });
};
