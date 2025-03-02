import { NestFactory } from '@nestjs/core';
import setupSwagger from './config/swagger-cfg';
import { ValidationPipe } from '@nestjs/common';
import AppModule from './modules/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  setupSwagger(app);
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
