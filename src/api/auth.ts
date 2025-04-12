import { SignupFormData } from "@/features/auth/types";
import { beamApi } from "./axios";

export const signUp = async (formData: SignupFormData) => {
  const response = await beamApi.post("/auth/signup", formData);
  return response?.data;
};
