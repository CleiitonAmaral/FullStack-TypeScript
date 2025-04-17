"use strict";
// src/services/auth.service.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerService = void 0;
const Users_Model_1 = require("../models/Users.Model");
const AuthUtils_1 = require("../utils/AuthUtils");
const registerService = async (data) => {
    const hashedPassword = await (0, AuthUtils_1.hashPassword)(data.password);
    return await (0, Users_Model_1.createUser)({
        email: data.email,
        password: hashedPassword,
    });
};
exports.registerService = registerService;
