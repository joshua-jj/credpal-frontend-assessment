import { signinSchema } from "@/schemas/signin";
import { signupSchema } from "@/schemas/signup";
import { z } from "zod";

export type SignupFormData = z.infer<typeof signupSchema>;
export type SigninFormData = z.infer<typeof signinSchema>;

export type SignUpServerData = {
  full_name: string;
  email: string;
  password: string;
}