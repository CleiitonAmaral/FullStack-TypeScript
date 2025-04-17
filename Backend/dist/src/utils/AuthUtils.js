"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createToken = exports.comparePassword = exports.hashPassword = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const confing_1 = require("../../confing");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const hashPassword = async (password) => {
    return await bcrypt_1.default.hash(password, confing_1.SALTS_ROUNDS);
};
exports.hashPassword = hashPassword;
const comparePassword = async (plainPassword, hashedPassword) => {
    try {
        return await bcrypt_1.default.compare(plainPassword, hashedPassword);
    }
    catch (error) {
        throw new Error(`Error comparing passwords: ${error.message}`);
    }
};
exports.comparePassword = comparePassword;
const createToken = (user) => {
    try {
        return jsonwebtoken_1.default.sign({ id: user.user_id }, confing_1.JWT_PASSWORD, { expiresIn: "24h" });
    }
    catch (error) {
        throw new Error(`Error generating token: ${error.message}`);
    }
};
exports.createToken = createToken;
