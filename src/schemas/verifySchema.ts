import { z } from "zod";

export const VerifyCodeValidation = z
  .string()
  .min(6, "Verification code is 6 digit long")
  .max(6, "Verification code should be at most 6 characters long");

export const verifyCodeSchema = z.object({
  verifyCode: VerifyCodeValidation,
});
