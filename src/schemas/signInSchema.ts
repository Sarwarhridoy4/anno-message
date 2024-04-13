import { z } from "zod";

export const PasswordValidation = z
  .string()
  .min(8, "Password should be at least 8 characters long")
  .max(15, "Password should be at most 15 characters long")
  .regex(
    /^[a-zA-Z0-9!@#$%^&*()_+{}[\]:;<>,.?~=-]+$/,
    "Password should contain only letters, numbers, and special characters: !@#$%^&*()_+{}[]:;<>,.?~=-"
  );

export const signInSchema = z.object({
  identifier: z.string().email({
    message: "Invalid Email!",
  }),
  password: PasswordValidation,
});
