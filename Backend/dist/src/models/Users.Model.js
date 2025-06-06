"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUserById = exports.findUserByEmail = exports.createUser = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createUser = async (data) => {
    return await prisma.user.create({
        data,
    });
};
exports.createUser = createUser;
const findUserByEmail = async (email) => {
    return await prisma.user.findUnique({
        where: { email },
    });
};
exports.findUserByEmail = findUserByEmail;
const findUserById = async (id) => {
    return await prisma.user.findUnique({
        where: { id },
    });
};
exports.findUserById = findUserById;
