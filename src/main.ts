import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });
  app. useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
  .setTitle('Spotify')
  .setDescription('Aplicação para gestão da plataforma de músicas')
  .setVersion('1.0.0')
  .addTag('status')
  .addBearerAuth()

  await app.listen(3000);
}
bootstrap();
