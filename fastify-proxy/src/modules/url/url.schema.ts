import { z } from "zod";
import zodToJsonSchema from "zod-to-json-schema";

export const urlParamSchema = z.object({
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

const urlResponseRerrorSchemaJson = zodToJsonSchema(urlResponseErrorSchema);
const urlParamSchemaJson = zodToJsonSchema(urlParamSchema);
const urlResponseSchemaJson = zodToJsonSchema(urlResponseSchema);
const urlBodySchemaJson = zodToJsonSchema(urlBodySchema);

type TUrlParam = z.infer<typeof urlParamSchema>;
type TErrorResponse = z.infer<typeof urlResponseErrorSchema>;
type TUrlBody = z.infer<typeof urlBodySchema>;

export {
  urlParamSchemaJson,
  urlResponseSchemaJson,
  urlBodySchemaJson,
  urlResponseRerrorSchemaJson,
};
export type { TUrlParam, TErrorResponse, TUrlBody };
