import { signupSchema } from "@/schemas/signup";
import { z } from "zod";

export type SignupFormData = z.infer<typeof signupSchema>;
