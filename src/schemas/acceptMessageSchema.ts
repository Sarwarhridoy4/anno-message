import { z } from "zod";

export const acceptMessageSchema = z.object({
  verifyCode: z.boolean(),
});
