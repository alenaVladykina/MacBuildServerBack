"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHashedPassword = void 0;
const crypto_1 = __importDefault(require("crypto"));
const getHashedPassword = (password) => {
    const sha256 = crypto_1.default.createHash('sha256');
    const hash = sha256.update(password).digest('base64');
    return hash;
};
exports.getHashedPassword = getHashedPassword;
