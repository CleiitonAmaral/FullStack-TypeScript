"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerController = void 0;
const Register_Schema_1 = require("../schemas/Register.Schema");
const AuthService_1 = require("../service/AuthService");
const registerController = async (req, res) => {
    try {
        const parsedData = Register_Schema_1.RegisterSchema.parse(req.body);
        const user = await (0, AuthService_1.registerService)(parsedData);
        return res.status(201).json({
            message: "Usuario registrado correctamente",
            user: {
                id: user.id,
                email: user.email,
            },
        });
    }
    catch (error) {
        return res.status(400).json({ error: error.message });
    }
};
exports.registerController = registerController;
