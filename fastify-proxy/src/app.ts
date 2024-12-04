import Fastify from "fastify";
import urlRoutes from "./modules/url/url.route";
import swaggerPlugin from "./plugins/swagger";
import cors from "@fastify/cors";

const buildApp = async () => {
  const app = Fastify({
    logger: true,
  });

  app.register(cors);
  app.register(swaggerPlugin);
  app.register(urlRoutes, { prefix: "url" });

  return app;
};

export default buildApp;
