import fp from "fastify-plugin";
import FastifySwagger from "@fastify/swagger";
import FastifySwaggerUi from "@fastify/swagger-ui";

const swaggerPlugin = fp(async (fastify) => {
  await fastify.register(FastifySwagger, {
    openapi: {
      info: {
        title: "CRUD PROXY",
        version: "1",
      },
    },
  });

  await fastify.register(FastifySwaggerUi, {
    routePrefix: "/",
  });
});

export default swaggerPlugin;
