import { FastifyReply, FastifyRequest } from "fastify";
import {
  decodeEncodedUrl,
  deleteUrlData,
  errorHandler,
  getUrlData,
  patchUrlData,
  postUrlData,
  putUrlData,
} from "./url.service";
import { TUrlBody, TUrlParam } from "./url.schema";

const getUrlController = async (
  request: FastifyRequest<{ Params: TUrlParam }>,
  reply: FastifyReply
) => {
  const link = request.params["*"];
  try {
    const decodedUrl = decodeEncodedUrl(link);
    const response = await getUrlData(decodedUrl);
    reply.status(200).send(response.data);
  } catch (error) {
    const errHandler = errorHandler(error);
    reply.status(errHandler.status || 500).send({
      ...errHandler,
      path: link,
    });
  }
};

const deleteUrlController = async (
  request: FastifyRequest<{ Params: TUrlParam }>,
  reply: FastifyReply
) => {
  const link = request.params["*"];

  try {
    const decodedUrl = decodeEncodedUrl(link);
    const response = await deleteUrlData(decodedUrl);
    reply.status(200).send(response.data);
  } catch (error) {
    const errHandler = errorHandler(error);
    reply.status(errHandler.status || 500).send({
      ...errHandler,
      path: link,
    });
  }
};

const postUrlController = async (
  request: FastifyRequest<{ Params: TUrlParam; Body: TUrlBody }>,
  reply: FastifyReply
) => {
  const link = request.params["*"];
  const data = request.body;
  try {
    const decodedUrl = decodeEncodedUrl(link);
    const response = await postUrlData(decodedUrl, data);
    reply.status(response.status).send(response.data);
  } catch (error) {
    const errHandler = errorHandler(error);
    reply.status(errHandler.status || 500).send({
      ...errHandler,
      path: link,
    });
  }
};

const patchUrlController = async (
  request: FastifyRequest<{ Params: TUrlParam; Body: TUrlBody }>,
  reply: FastifyReply
) => {
  const link = request.params["*"];
  const data = request.body;
  try {
    const decodedUrl = decodeEncodedUrl(link);
    const response = await patchUrlData(decodedUrl, data);
    reply.status(response.status).send(response.data);
  } catch (error) {
    const errHandler = errorHandler(error);
    reply.status(errHandler.status || 500).send({
      ...errHandler,
      path: link,
    });
  }
};

const PutUrlController = async (
  request: FastifyRequest<{ Params: TUrlParam; Body: TUrlBody }>,
  reply: FastifyReply
) => {
  const link = request.params["*"];
  const data = request.body;
  try {
    const decodedUrl = decodeEncodedUrl(link);
    const response = await putUrlData(decodedUrl, data);
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
  getUrlController,
  postUrlController,
  deleteUrlController,
  PutUrlController,
  patchUrlController,
};
