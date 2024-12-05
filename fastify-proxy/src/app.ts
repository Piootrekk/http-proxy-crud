import Fastify from "fastify";
import urlRoutes from "./modules/url/url.route";
import swaggerPlugin from "./plugins/swagger";
import cors from "@fastify/cors";
import healthRoutes from "./modules/health/health.route";

const buildApp = async () => {
  const app = Fastify({
    logger: true,
  });

  await app.register(cors);
  await app.register(swaggerPlugin);
  await app.register(urlRoutes, { prefix: "/url" });
  await app.register(healthRoutes, { prefix: "/health" });
  return app;
};

export default buildApp;
