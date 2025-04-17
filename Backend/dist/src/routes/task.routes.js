"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.post("/tasks", taskController.createTaskController); // Crear tarea
router.get("/tasks", taskController.getTasksController); // Obtener todas las tareas
router.put("/tasks/:id", taskController.updateTaskController); // Actualizar tarea
router.delete("/tasks/:id", taskController.deleteTaskController); // Eliminar tarea
exports.default = router;
