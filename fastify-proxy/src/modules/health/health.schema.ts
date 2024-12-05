import { z } from "zod";
import zodToJsonSchema from "zod-to-json-schema";

const responseSchema = z.object({
  health: z.boolean(),
});

const healthResponseSchemaJson = zodToJsonSchema(responseSchema);

export { healthResponseSchemaJson };
