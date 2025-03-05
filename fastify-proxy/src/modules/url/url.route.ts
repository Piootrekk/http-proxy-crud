import { FastifyInstance } from "fastify";
import {
  getUrlHandler,
  postUrlHandler,
  deletetUrlHandler,
  putUrlHandler,
  patchUrlHandler,
} from "./url.controller";
import {
  urlBodySchemaJson,
  urlParamSchemaJson,
  urlResponseRerrorSchemaJson,
  urlResponseSchemaJson,
} from "./url.schema";
import { preHandler } from "./url.hook";

const urlRoutes = async (server: FastifyInstance) => {
  server.get(
    "/*",
    {
      schema: {
        tags: ["URL"],
        params: urlParamSchemaJson,
        response: {
          "200": urlResponseSchemaJson,
          "400": urlResponseRerrorSchemaJson,
          "500": urlResponseRerrorSchemaJson,
        },
      },
      preHandler: preHandler,
    },
    getUrlHandler
  );
  server.post(
    "/*",
    {
      schema: {
        tags: ["URL"],
        params: urlParamSchemaJson,
        body: urlBodySchemaJson,
        response: {
          "200": urlResponseSchemaJson,
          "400": urlResponseRerrorSchemaJson,
          "500": urlResponseRerrorSchemaJson,
        },
      },
      preHandler: preHandler,
    },
    postUrlHandler
  );
  server.delete(
    "/*",
    {
      schema: {
        tags: ["URL"],
        params: urlParamSchemaJson,
        response: {
          "200": urlResponseSchemaJson,
          "400": urlResponseRerrorSchemaJson,
          "500": urlResponseRerrorSchemaJson,
        },
      },
      preHandler: preHandler,
    },
    deletetUrlHandler
  );
  server.put(
    "/*",
    {
      schema: {
        tags: ["URL"],
        params: urlParamSchemaJson,
        body: urlBodySchemaJson,
        response: {
          "200": urlResponseSchemaJson,
          "400": urlResponseRerrorSchemaJson,
          "500": urlResponseRerrorSchemaJson,
        },
      },
      preHandler: preHandler,
    },
    putUrlHandler
  );
  server.patch(
    "/*",
    {
      schema: {
        tags: ["URL"],
        params: urlParamSchemaJson,
        body: urlBodySchemaJson,
        response: {
          "200": urlResponseSchemaJson,
          "400": urlResponseRerrorSchemaJson,
          "500": urlResponseRerrorSchemaJson,
        },
      },
      preHandler: preHandler,
    },
    patchUrlHandler
  );
};
export default urlRoutes;
