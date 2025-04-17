"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRegisterData = exports.RegisterSchema = void 0;
// src/schemas/auth.schema.ts
const zod_1 = require("zod");
exports.RegisterSchema = zod_1.z.object({
    username: zod_1.z.string().min(3).max(20),
    email: zod_1.z.string().email(),
    password: zod_1.z
        .string()
        .min(8)
        .regex(/[A-Z]/, "Debe contener una mayúscula")
        .regex(/[a-z]/, "Debe contener una minúscula")
        .regex(/[0-9]/, "Debe contener un número")
        .regex(/[@$!%*?&]/, "Debe contener un carácter especial"),
});
const validateRegisterData = (data) => {
    try {
        return exports.RegisterSchema.parse(data);
    }
    catch (error) {
        if (error instanceof zod_1.z.ZodError) {
            throw new Error(JSON.stringify(error.errors.map((err) => ({
                path: err.path.join("."),
                message: err.message,
            }))));
        }
        throw error;
    }
};
exports.validateRegisterData = validateRegisterData;
