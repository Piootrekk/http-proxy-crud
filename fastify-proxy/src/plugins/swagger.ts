import { FastifyPluginCallback } from "fastify";
import FastifySwagger from "@fastify/swagger";
import FastifySwaggerUi from "@fastify/swagger-ui";

const swagger: FastifyPluginCallback = async (fastify, _, done) => {
  await fastify.register(FastifySwagger, {
    openapi: {
      info: {
        title: "CRUD PROXY",
        version: "1.0.0",
      },
    },
  });

  await fastify.register(FastifySwaggerUi, {
    routePrefix: "/docs",
  });

  done();
};

export default swagger;
