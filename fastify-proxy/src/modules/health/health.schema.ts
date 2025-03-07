import { FastifySchema } from "fastify";
import { z } from "zod";
import zodToJsonSchema from "zod-to-json-schema";

const responseSchema = z.object({
  health: z.boolean(),
});

const healthResponseDto = zodToJsonSchema(responseSchema);

const healthSchema: FastifySchema = {
  tags: ["Health"],
  response: {
    "200": healthResponseDto,
  },
};

export { healthSchema };
