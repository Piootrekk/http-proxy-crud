import { FastifyReply, FastifyRequest } from "fastify";
import {
  deleteUrlData,
  getUrlData,
  patchUrlData,
  postUrlData,
  putUrlData,
} from "./url.service";
import { TUrlQuery, TErrorResponse, TUrlBody } from "./url.schema";
import { AxiosError } from "axios";

const errorHandler = (err: unknown): Omit<TErrorResponse, "path"> => {
  if (err instanceof AxiosError)
    return {
      message: err.message,
      code: err.code,
      status: err.response?.status,
    };
  else {
    return {
      message: "Unknown error",
      code: "ERROR",
      status: 500,
    };
  }
};

const getUrlHandler = async (
  request: FastifyRequest<{ Querystring: TUrlQuery }>,
  reply: FastifyReply
) => {
  const { link } = request.query;
  try {
    const response = await getUrlData(link);
    reply.status(200).send(response.data);
  } catch (error) {
    const errHandler = errorHandler(error);
    reply.status(errHandler.status || 500).send({
      ...errHandler,
      path: link,
    });
  }
};

const deletetUrlHandler = async (
  request: FastifyRequest<{ Querystring: TUrlQuery }>,
  reply: FastifyReply
) => {
  const { link } = request.query;
  try {
    const response = await deleteUrlData(link);
    reply.status(200).send(response.data);
  } catch (error) {
    const errHandler = errorHandler(error);
    reply.status(errHandler.status || 500).send({
      ...errHandler,
      path: link,
    });
  }
};

const postUrlHandler = async (
  request: FastifyRequest<{ Querystring: TUrlQuery; Body: TUrlBody }>,
  reply: FastifyReply
) => {
  const { link } = request.query;
  const data = request.body;

  try {
    const response = await postUrlData(link, data);
    reply.status(response.status).send(response.data);
  } catch (error) {
    const errHandler = errorHandler(error);
    reply.status(errHandler.status || 500).send({
      ...errHandler,
      path: link,
    });
  }
};

const patchUrlHandler = async (
  request: FastifyRequest<{ Querystring: TUrlQuery; Body: TUrlBody }>,
  reply: FastifyReply
) => {
  const { link } = request.query;
  const data = request.body;
  try {
    const response = await patchUrlData(link, data);
    reply.status(response.status).send(response.data);
  } catch (error) {
    const errHandler = errorHandler(error);
    reply.status(errHandler.status || 500).send({
      ...errHandler,
      path: link,
    });
  }
};

const putUrlHandler = async (
  request: FastifyRequest<{ Querystring: TUrlQuery; Body: TUrlBody }>,
  reply: FastifyReply
) => {
  const { link } = request.query;
  const data = request.body;

  try {
    const response = await putUrlData(link, data);
    reply.status(response.status).send(response.data);
  } catch (error) {
    const errHandler = errorHandler(error);
    reply.status(errHandler.status || 500).send({
      ...errHandler,
      path: link,
    });
  }
};

export {
  getUrlHandler,
  postUrlHandler,
  deletetUrlHandler,
  putUrlHandler,
  patchUrlHandler,
};
