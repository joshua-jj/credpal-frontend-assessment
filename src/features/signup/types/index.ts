import { signupSchema } from "@/schemas/signin";
import { z } from "zod";

export type SignupFormData = z.infer<typeof signupSchema>;