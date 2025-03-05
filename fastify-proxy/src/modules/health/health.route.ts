import { FastifyInstance } from "fastify";
import { getHealth } from "./health.controller";
import { healthResponseSchemaJson } from "./health.schema";

const healthRoutes = async (server: FastifyInstance) => {
  server.get(
    "/",
    {
      schema: {
        tags: ["Health"],
        response: {
          "200": healthResponseSchemaJson,
        },
      },
    },
    getHealth
  );
};

export default healthRoutes;
