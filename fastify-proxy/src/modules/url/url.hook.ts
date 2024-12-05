import { FastifyReply, FastifyRequest } from "fastify";
import { TUrlQuery } from "./url.schema";

const preHandler = async (
  request: FastifyRequest<{
    Querystring: TUrlQuery;
  }>,
  reply: FastifyReply
) => {
  const rawQuery = request.raw.url?.split("?link=")[1];
  if (!rawQuery) {
    reply.status(400).send({ error: 'Missing "link" parameter' });
    return;
  }
  const encodeURL = decodeURIComponent(rawQuery);
  request.query = { link: encodeURL };
};

export { preHandler };
