import { Router } from "express";
import { createTask, deleteTask, getTask, updateTasks } from "./TaskController";

// Crear router para las tareas
const TaskRoute = Router();

TaskRoute.post("/tasks", createTask); 
TaskRoute.get("/tasks", getTask); 
TaskRoute.put("/tasks/:id", updateTasks);
TaskRoute.delete("/tasks/:id", deleteTask); 

export default TaskRoute;
