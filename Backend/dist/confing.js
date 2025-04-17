"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWT_PASSWORD = exports.SALTS_ROUNDS = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.SALTS_ROUNDS = Number(process.env.SALTS_ROUNDS) || 10;
exports.JWT_PASSWORD = process.env.JWT_SECRET || "mi_clave_secretea_super_seceret@afjoij90djoiascj";
