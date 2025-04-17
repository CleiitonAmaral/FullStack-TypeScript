"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.updateTasks = exports.createTask = exports.getTask = void 0;
const TaskService_1 = require("../service/TaskService");
const handleError = (res, error, message) => {
    console.error(error);
    return res.status(500).json({ error: message });
};
const getTask = async (_req, res) => {
    try {
        const tasks = await (0, TaskService_1.getAllTasksService)();
        return res.status(200).json(tasks);
    }
    catch (error) {
        return handleError(res, error, "Error al obtener las tareas.");
    }
};
exports.getTask = getTask;
const createTask = async (req, res) => {
    try {
        const data = req.body;
        const newTask = await (0, TaskService_1.createTasksService)(data);
        return res.status(201).json(newTask);
    }
    catch (error) {
        return handleError(res, error, "Error al obtener las tareas.");
    }
};
exports.createTask = createTask;
const updateTasks = async (req, res) => {
    try {
        const id = Number(req.params.id);
        if (isNaN(id))
            throw new Error("ID inválido.");
        const data = req.body;
        const updated = await (0, TaskService_1.updateService)(id, data);
        return res.status(200).json(updated);
    }
    catch (error) {
        return handleError(res, error, "Error al actualizar la tarea.");
    }
};
exports.updateTasks = updateTasks;
const deleteTask = async (req, res) => {
    try {
        const id = Number(req.params.id);
        if (isNaN(id))
            throw new Error("ID inválido.");
        const deleted = await (0, TaskService_1.deleteService)(id);
        return res.status(200).json(deleted);
    }
    catch (error) {
        return handleError(res, error, "Error al eliminar la tarea.");
    }
};
exports.deleteTask = deleteTask;
