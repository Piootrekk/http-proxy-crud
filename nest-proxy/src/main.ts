import { NestFactory } from '@nestjs/core';
import HealthModule from './modules/health/health.module';
import setupSwagger from './config/swagger-cfg';

async function bootstrap() {
  const app = await NestFactory.create(HealthModule);
  setupSwagger(app);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
