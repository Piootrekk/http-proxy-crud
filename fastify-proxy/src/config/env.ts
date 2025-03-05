import { z } from "zod";
import { config } from "dotenv";

config();
const envSchema = z.object({
  PORT: z.string().min(1).transform(Number),
});
const { PORT } = process.env;

const getPort = (): number => {
  const parsedEnv = envSchema.safeParse({ PORT });
  if (!parsedEnv.success) {
    return 3000;
  }
  return parsedEnv.data.PORT;
};

export { getPort };
