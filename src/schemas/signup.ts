import { z } from "zod";

export const signupSchema = z.object({
  fullName: z.string().trim().min(1, { message: "Please enter full name" }),
  email: z.string().trim().min(1, { message: "Please enter email" }).email({ message: "Please enter a valid email address" }),
  password: z.string().trim().min(1, { message: "Please enter password" }),
});
