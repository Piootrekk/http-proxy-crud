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
  urlQuerySchemaJson,
  urlResponseRerrorSchemaJson,
  urlResponseSchemaJson,
} from "./url.schema";
import { preHandler } from "./url.hook";
const urlRoutes = async (server: FastifyInstance) => {
  server.get(
    "/",
    {
      schema: {
        tags: ["URL"],
        querystring: urlQuerySchemaJson,
        response: {
          "2xx": urlResponseSchemaJson,
          "4xx": urlResponseRerrorSchemaJson,
          "5xx": urlResponseRerrorSchemaJson,
        },
      },
      preHandler,
    },
    getUrlHandler
  );
  server.post(
    "/",
    {
      schema: {
        tags: ["URL"],
        querystring: urlQuerySchemaJson,
        body: urlBodySchemaJson,
        response: {
          "2xx": urlResponseSchemaJson,
          "4xx": urlResponseRerrorSchemaJson,
          "5xx": urlResponseRerrorSchemaJson,
        },
      },
    },
    postUrlHandler
  );
  server.delete(
    "/",
    {
      schema: {
        tags: ["URL"],
        querystring: urlQuerySchemaJson,
        response: {
          "2xx": urlResponseSchemaJson,
          "4xx": urlResponseRerrorSchemaJson,
          "5xx": urlResponseRerrorSchemaJson,
        },
      },
    },
    deletetUrlHandler
  );
  server.put(
    "/",
    {
      schema: {
        tags: ["URL"],
        querystring: urlQuerySchemaJson,
        body: urlBodySchemaJson,
        response: {
          "2xx": urlResponseSchemaJson,
          "4xx": urlResponseRerrorSchemaJson,
          "5xx": urlResponseRerrorSchemaJson,
        },
      },
    },
    putUrlHandler
  );
  server.patch(
    "/",
    {
      schema: {
        tags: ["URL"],
        querystring: urlQuerySchemaJson,
        body: urlBodySchemaJson,
        response: {
          "2xx": urlResponseSchemaJson,
          "4xx": urlResponseRerrorSchemaJson,
          "5xx": urlResponseRerrorSchemaJson,
        },
      },
    },
    patchUrlHandler
  );
};
export default urlRoutes;
