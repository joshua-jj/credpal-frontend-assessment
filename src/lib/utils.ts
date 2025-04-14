import queryClient from "@/config/tansack-query";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const getToken = () => (localStorage.getItem("User-Token") ? localStorage.getItem("User-Token") : null);

export const setToken = (token: string) => {
  localStorage.setItem("User-Token", token);
};

export const removeToken = () => {
  localStorage.removeItem("User-Token");
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