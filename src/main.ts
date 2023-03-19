import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from "dotenv"

async function bootstrap() {
  dotenv.config()
  const app = await NestFactory.create(AppModule, { cors: { credentials: true, origin: [process.env.URI] }});
  app.enableCors()
  await app.listen(process.env.PORT);

}
bootstrap();
