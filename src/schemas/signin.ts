import { z } from "zod";

export const signinSchema = z.object({
  email: z.string().min(1, { message: "Please enter email" }).email({ message: "Please enter a valid email address" }).trim(),
  password: z.string().min(1, { message: "Please enter password" }).trim(),
});
