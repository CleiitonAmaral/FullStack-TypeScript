"use strict";
// src/models/task.model.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskModel = void 0;
const prismaConfig_1 = require("../prismaConfig");
class TaskModel {
    async createTask(data) {
        try {
            return await prismaConfig_1.prisma.task.create({ data });
        }
        catch (error) {
            console.error("Error al crear tarea:", error);
            throw new Error("No se pudo crear la tarea.");
        }
    }
    async updateTask(id, data) {
        try {
            return await prismaConfig_1.prisma.task.update({
                where: { id },
                data,
            });
        }
        catch (error) {
            console.error("Error al actualizar tarea:", error);
            throw new Error("No se pudo actualizar la tarea.");
        }
    }
    async getTasks() {
        try {
            return await prismaConfig_1.prisma.task.findMany();
        }
        catch (error) {
            console.error("Error al obtener tareas:", error);
            throw new Error("No se pudieron obtener las tareas.");
        }
    }
    async deleteTask(id) {
        try {
            return await prismaConfig_1.prisma.task.delete({
                where: { id },
            });
        }
        catch (error) {
            console.error("Error al eliminar tarea:", error);
            throw new Error("No se pudo eliminar la tarea.");
        }
    }
}
exports.TaskModel = TaskModel;
