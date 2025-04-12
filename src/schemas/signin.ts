import { z } from "zod";

export const signupSchema = z.object({
  fullName: z.string().min(1, { message: "Please enter full name" }),
  email: z.string().min(1, { message: "Please enter email" }),
  password: z.string().min(1, { message: "Please enter password" }),
});
