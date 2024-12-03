import Fastify from "fastify";

const buildApp = async () => {
  const app = Fastify({
    logger: true,
  });

  return app;
};

export default buildApp;
