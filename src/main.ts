import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express'; // ✅ default import, không dùng namespace

const server = express();

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule, new ExpressAdapter(server));
    await app.init(); // Không dùng app.listen ở Vercel
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.error(e.message);
    } else {
      console.error(String(e));
    }
  }
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
bootstrap();

export default server;
