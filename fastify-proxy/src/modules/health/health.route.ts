import { FastifyInstance } from "fastify";
import { getHealth } from "./health.controller";
import { healthSchema } from "./health.schema";

const healthRoutes = async (server: FastifyInstance) => {
  server.get(
    "/",
    {
      schema: healthSchema,
    },
    getHealth
  );
};

export default healthRoutes;
