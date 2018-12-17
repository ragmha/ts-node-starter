"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
app
    .get('/', (req, res) => res.send('Yo!'))
    .listen(4004, () => console.log(`Server is running on htps://localhost:4004`));
//# sourceMappingURL=server.js.map