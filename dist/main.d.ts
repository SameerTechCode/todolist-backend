import { INestApplication } from '@nestjs/common';
import { ExpressAdapter } from '@nestjs/platform-express';
export declare function createApp(adapter?: ExpressAdapter): Promise<INestApplication>;
