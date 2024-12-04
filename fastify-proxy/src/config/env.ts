import { z } from "zod";
import { config } from "dotenv";

config();
const envSchema = z.object({
  PORT: z.string().min(1).transform(Number),
});
const { PORT } = process.env;
const parsedEnv = envSchema.safeParse({ PORT });
if (!parsedEnv.success) {
  throw new Error(`Invalid env: ${parsedEnv.error}`);
}

export default parsedEnv.data;
