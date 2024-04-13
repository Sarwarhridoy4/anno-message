import { z } from "zod";

export const messagesCodeSchema = z.object({
  content: z
    .string()
    .min(10, { message: "minimum 10 carecter needed" })
    .max(300, { message: "Max carecter limit is 300" }),
});
