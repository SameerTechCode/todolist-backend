import { createApp } from './main';
import serverless, { Handler } from 'serverless-http';
import express, { Request, Response } from 'express';
import { ExpressAdapter } from '@nestjs/platform-express';

const expressApp = express();
let handler: Handler; // 👈 ab type fix

async function bootstrapServer(): Promise<Handler> {
  if (handler) return handler;

  const app = await createApp(new ExpressAdapter(expressApp));
  await app.init();

  handler = serverless(expressApp);
  return handler;
}

// 👇 Vercel ke liye serverless handler export karo
export default async function (req: Request, res: Response) {
  const h = await bootstrapServer();
  return h(req, res);
}
