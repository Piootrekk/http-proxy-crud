import buildApp from "./app";
import env from "./config/env";

const main = async () => {
  const server = await buildApp();
  try {
    await server.listen({ port: Number(env.PORT) });
  } catch (error) {
    server.log.error("Can't startup server");
    process.exit(1);
  }
};

main();
