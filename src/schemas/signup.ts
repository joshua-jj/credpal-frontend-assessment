import { z } from "zod";

export const signupSchema = z.object({
  fullName: z.string().min(1, { message: "Please enter full name" }).trim(),
  email: z.string().min(1, { message: "Please enter email" }).email({ message: "Please enter a valid email address" }).trim(),
  password: z.string().min(1, { message: "Please enter password" }).trim(),
});
