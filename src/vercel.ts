import { createApp } from './main';
import * as serverless from 'serverless-http';
import * as express from 'express';
import { ExpressAdapter } from '@nestjs/platform-express';

const expressApp = express();

// 👇 type sahi define karo
let handler: any;

async function bootstrapServer() {
  if (handler) return handler;

  // NestJS ko express ke sath run karo
  const app = await createApp(new ExpressAdapter(expressApp));
  await app.init();

  handler = serverless(expressApp);
  return handler;
}

// 👇 Vercel ke liye default export
export default async function (req: express.Request, res: express.Response) {
  const h = await bootstrapServer();
  return h(req, res);
}
