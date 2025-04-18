import {
  createTasksRequest,
  deleteTasksRequest,
  getTasksRequest,
  updateTasksRequest,
} from "../api/TasksApi";
import { CreateTasks, TaskTypes, UpdateTasks } from "../types/TasksTypes";

export const getTasksService = async (): Promise<TaskTypes[]> => {
  try {
    const response = await getTasksRequest();
    
    return response;
  } catch (error) {
    console.error("Error en getTasksService:", error);
    throw new Error("No se pudo obtener las tareas.");
  }
};

export const createTaskService = async (
  data: CreateTasks
): Promise<TaskTypes> => {
  try {
    const response = await createTasksRequest(data);
    return response;
  } catch (error) {
    console.error("Error en createTaskService:", error);
    throw new Error("No se pudo crear la tarea.");
  }
};

export const deleteTaskService = async (id: number): Promise<TaskTypes> => {
  try {
    const response = await deleteTasksRequest(id);
    return response;
  } catch (error) {
    console.error("Error en deleteTaskService:", error);
    throw new Error("No se pudo eliminar la tarea.");
  }
};

export const updateTaskService = async (
  id: number,
  data: UpdateTasks
): Promise<TaskTypes> => {
  try {
    const response = await updateTasksRequest(id, data);
    return response;
  } catch (error) {
    console.error("Error en updateTaskService:", error);
    throw new Error("No se pudo actualizar la tarea.");
  }
};
