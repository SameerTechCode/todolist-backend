"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const main_1 = require("./main");
const serverless_http_1 = require("serverless-http");
const express_1 = require("express");
const platform_express_1 = require("@nestjs/platform-express");
const expressApp = (0, express_1.default)();
let handler;
async function bootstrapServer() {
    if (handler)
        return handler;
    const app = await (0, main_1.createApp)(new platform_express_1.ExpressAdapter(expressApp));
    await app.init();
    handler = (0, serverless_http_1.default)(expressApp);
    return handler;
}
async function default_1(req, res) {
    const h = await bootstrapServer();
    return h(req, res);
}
//# sourceMappingURL=vercel.js.map