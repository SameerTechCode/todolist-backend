"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApp = createApp;
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
async function createApp(adapter) {
    const app = adapter
        ? await core_1.NestFactory.create(app_module_1.AppModule, adapter)
        : await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: [
            'http://localhost:3000',
            'http://127.0.0.1:3000',
            'https://todolist-frontend-5k5t.vercel.app',
        ],
        credentials: true,
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
        allowedHeaders: 'Content-Type, Authorization',
    });
    app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true }));
    return app;
}
if (process.env.VERCEL !== '1' && require.main === module) {
    createApp().then(app => {
        const port = process.env.PORT || 4000;
        app.listen(port);
        console.log(`🚀 Backend running on http://localhost:${port}`);
    });
}
//# sourceMappingURL=main.js.map