import { z } from "zod";
import zodToJsonSchema from "zod-to-json-schema";

export const urlQuerySchema = z.object({
  link: z.string().refine(
    (val) => {
      try {
        new URL(val);
        return true;
      } catch {
        return false;
      }
    },
    { message: "Invalid URL format" }
  ),
});

const urlBodySchema = z.record(z.any());
const urlResponseErrorSchema = z.object({
  message: z.string().optional(),
  status: z.number().optional(),
  code: z.string().optional(),
  path: z.string().url(),
});
const urlResponseSchema = z.any();

const urlResponseRerrorSchemaJson = zodToJsonSchema(urlResponseErrorSchema);
const urlQuerySchemaJson = zodToJsonSchema(urlQuerySchema);
const urlResponseSchemaJson = zodToJsonSchema(urlResponseSchema);
const urlBodySchemaJson = zodToJsonSchema(urlBodySchema);

type TUrlQuery = z.infer<typeof urlQuerySchema>;
type TErrorResponse = z.infer<typeof urlResponseErrorSchema>;
type TUrlBody = z.infer<typeof urlBodySchema>;

export {
  urlQuerySchemaJson,
  urlResponseSchemaJson,
  urlBodySchemaJson,
  urlResponseRerrorSchemaJson,
};
export type { TUrlQuery, TErrorResponse, TUrlBody };
