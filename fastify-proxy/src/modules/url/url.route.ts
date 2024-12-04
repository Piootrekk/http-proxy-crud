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

const urlRoutes = async (server: FastifyInstance) => {
  server.get(
    "/",
    {
      schema: {
        querystring: urlQuerySchemaJson,
        response: {
          "2xx": urlResponseSchemaJson,
          "4xx": urlResponseRerrorSchemaJson,
          "5xx": urlResponseRerrorSchemaJson,
        },
      },
    },
    getUrlHandler
  );
  server.post(
    "/",
    {
      schema: {
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
