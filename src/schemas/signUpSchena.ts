import { z } from "zod";

export const UsernameValidation = z
  .string()
  .min(5, "Username should be at least 5 characters long")
  .max(20, "Username should be at most 20 characters long")
  .regex(/^[a-zA-Z0-9]+$/, "Username should contain only letters and numbers");

export const PasswordValidation = z
  .string()
  .min(8, "Password should be at least 8 characters long")
  .max(15, "Password should be at most 15 characters long")
  .regex(
    /^[a-zA-Z0-9!@#$%^&*()_+{}[\]:;<>,.?~=-]+$/,
    "Password should contain only letters, numbers, and special characters: !@#$%^&*()_+{}[]:;<>,.?~=-"
  );

export const signUpSchema = z.object({
  userName: UsernameValidation,
  email: z.string().email({
    message: "Invalid Email!",
  }),
  password: PasswordValidation,
});
