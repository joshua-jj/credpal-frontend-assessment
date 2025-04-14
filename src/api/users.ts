import { beamApi } from "./axios";

export const getProfile = async () => {
  const response = await beamApi("/users/profile");
  return response?.data?.data;
};
