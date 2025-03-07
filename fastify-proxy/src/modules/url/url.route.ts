import { FastifyInstance } from "fastify";
import {
  getUrlController,
  postUrlController,
  deleteUrlController,
  patchUrlController,
  PutUrlController,
} from "./url.controller";
import { urlSchema, urlWithBodySchema } from "./url.schema";
import { preHandlerHook } from "./url.hook";

const urlRoutes = async (server: FastifyInstance) => {
  server.get(
    "/*",
    {
      schema: urlSchema,
      preHandler: preHandlerHook,
    },
    getUrlController
  );
  server.post(
    "/*",
    {
      schema: urlWithBodySchema,
      preHandler: preHandlerHook,
    },
    postUrlController
  );
  server.delete(
    "/*",
    {
      schema: urlSchema,
      preHandler: preHandlerHook,
    },
    deleteUrlController
  );
  server.put(
    "/*",
    {
      schema: urlWithBodySchema,
      preHandler: preHandlerHook,
    },
    PutUrlController
  );
  server.patch(
    "/*",
    {
      schema: urlWithBodySchema,
      preHandler: preHandlerHook,
    },
    patchUrlController
  );
};

export default urlRoutes;
