import { z } from "zod";

const envSchema = z.object({
  PORT: z.string(),
});
const { PORT } = process.env;
const parsedEnv = envSchema.safeParse({ PORT });
if (!parsedEnv.success) {
  throw new Error(`Invalid env: ${parsedEnv.error}`);
}

export default parsedEnv.data;
