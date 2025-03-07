import { FastifyReply, FastifyRequest } from "fastify";
import { TUrlParam } from "./url.schema";

const preHandlerHook = async (
  request: FastifyRequest<{ Params: TUrlParam }>,
  reply: FastifyReply
) => {
  const rawQuery = request.originalUrl.replace("/url/", "");
  if (!rawQuery) {
    reply.status(400).send({ error: 'Missing "link" parameter' });
    return;
  }
  request.params["*"] = rawQuery;
};

export { preHandlerHook };
