import { z } from "zod";

export const addFundSchema = z.object({
  cardNumber: z
    .string()
    .trim()
    .min(1, { message: "Please enter card number" })
    .regex(/^\d+$/, { message: "Card number contain only numbers" })
    .length(16, { message: "Card number must be 16 digits" }),
  expiryDate: z
    .string()
    .min(1, { message: "Please enter card expiry date" })
    .regex(/^\d{2}\/\d{2}$/, { message: "Expiry date must be in /mm/yy format" }),
  cvv: z
    .string()
    .trim()
    .min(1, { message: "Please enter card cvv" })
    .regex(/^\d{3}$/, { message: "CVV must contain only numbers" })
    .length(3, { message: "CVV must be 3 digits" }),
  amount: z.string().trim().min(1, { message: "Please enter amount" }).regex(/^\d+\.\d{2}$/, { message: "Amount must be a decimal number with exactly 2 decimal places" }),
});

export const transferSchema = z.object({
  cardNumber: z.string().min(1, { message: "Please enter email" }).email({ message: "Please enter a valid email address" }).trim(),
  password: z.string().min(1, { message: "Please enter password" }).trim(),
});
