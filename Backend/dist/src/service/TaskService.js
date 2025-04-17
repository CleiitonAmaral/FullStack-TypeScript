"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateService = exports.deleteService = exports.createTasksService = exports.getAllTasksService = void 0;
const Tasks_Model_1 = require("../models/Tasks.Model");
const taskModel = new Tasks_Model_1.TaskModel();
const getAllTasksService = async () => {
    try {
        return await taskModel.getTasks();
    }
    catch (error) {
        throw new Error("Error al crear una tarea");
    }
};
exports.getAllTasksService = getAllTasksService;
const createTasksService = async (data) => {
    try {
        return await taskModel.createTask(data);
    }
    catch (error) {
        throw new Error("Error al crear una tarea");
    }
};
exports.createTasksService = createTasksService;
const deleteService = async (id) => {
    try {
        return await taskModel.deleteTask(id);
    }
    catch (error) {
        throw new Error("Error al eliminar una tarea");
    }
};
exports.deleteService = deleteService;
const updateService = async (id, data) => {
    try {
        return await taskModel.updateTask(id, data);
    }
    catch (error) {
        throw new Error("Error al actualizar una tarea");
    }
};
exports.updateService = updateService;
