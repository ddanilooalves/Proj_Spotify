import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
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
  .addTag('auth')
  .addTag('musics')
  .addTag('homepage')
  .addTag('profiles')
  .addTag('user')
  .addTag('genders')
  .addBearerAuth()
  .build()

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  
  await app.listen(3333);
}
bootstrap();
