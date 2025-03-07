import { FastifySchema } from "fastify/types/schema";
import { z } from "zod";
import zodToJsonSchema from "zod-to-json-schema";

const urlParamSchema = z.object({
  "*": z.string(),
});

const urlBodySchema = z.record(z.any());

const urlResponseErrorSchema = z.object({
  message: z.string().optional(),
  status: z.number().optional(),
  code: z.string().optional(),
  path: z.string().url().optional(),
});
const urlResponseSchema = z.any();

const urlResponseErrorDto = zodToJsonSchema(urlResponseErrorSchema);
const urlParamDto = zodToJsonSchema(urlParamSchema);
const urlResponseDto = zodToJsonSchema(urlResponseSchema);
const urlBodyDto = zodToJsonSchema(urlBodySchema);

type TUrlParam = z.infer<typeof urlParamSchema>;
type TErrorResponse = z.infer<typeof urlResponseErrorSchema>;
type TUrlBody = z.infer<typeof urlBodySchema>;

const urlSchema: FastifySchema = {
  tags: ["URL"],
  params: urlParamDto,
  response: {
    200: urlResponseDto,
    400: urlResponseErrorDto,
    500: urlResponseErrorDto,
  },
};

const urlWithBodySchema = urlSchema && { tags: ["URL"], body: urlBodyDto };

export { urlSchema, urlWithBodySchema };
export type { TUrlParam, TErrorResponse, TUrlBody };
