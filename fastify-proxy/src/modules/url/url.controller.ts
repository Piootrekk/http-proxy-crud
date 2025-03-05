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

const getUrlHandler = async (
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

const deletetUrlHandler = async (
  request: FastifyRequest<{ Params: TUrlParam }>,
  reply: FastifyReply
) => {
  // const link = request.params.link;
  const link = decodeURIComponent(request.params["*"]);

  console.log(link);
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
  request: FastifyRequest<{ Params: TUrlParam; Body: TUrlBody }>,
  reply: FastifyReply
) => {
  // const link = request.params.link;
  const link = decodeURIComponent(request.params["*"]);

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
  request: FastifyRequest<{ Params: TUrlParam; Body: TUrlBody }>,
  reply: FastifyReply
) => {
  // const link = request.params.link;
  const link = decodeURIComponent(request.params["*"]);

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
  request: FastifyRequest<{ Params: TUrlParam; Body: TUrlBody }>,
  reply: FastifyReply
) => {
  // const link = request.params.link;
  const link = decodeURIComponent(request.params["*"]);

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
