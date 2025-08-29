import * as crypto from "crypto";   // ✅ crypto import

// ✅ global crypto fix (TypeORM ke liye)
if (!(global as any).crypto) {
  (global as any).crypto = crypto;
}

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { INestApplication } from '@nestjs/common';
import { ExpressAdapter } from '@nestjs/platform-express';

export async function createApp(adapter?: ExpressAdapter): Promise<INestApplication> {
  const app = adapter
    ? await NestFactory.create(AppModule, adapter)
    : await NestFactory.create(AppModule);

  app.enableCors({
    origin: [
      'http://localhost:3000', 
      'http://127.0.0.1:3000',
      'https://todolist-frontend-green.vercel.app',   // ✅ updated frontend URL
    ],
    credentials: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Authorization',
  });

  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  return app;
}

// 👇 Local development ke liye
if (process.env.VERCEL !== '1' && require.main === module) {
  createApp().then(app => {
    const port = process.env.PORT || 4000;
    app.listen(port);
    console.log(`🚀 Backend running on http://localhost:${port}`);
  });
}
