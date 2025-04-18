import axios from "../api/axios";
import { CreateTasks, TaskTypes, UpdateTasks } from "../types/TasksTypes";

export const getTasksRequest = async (): Promise<TaskTypes[]> => {
  try {
    const response = await axios.get("http://localhost:3000/tasks");
    return response.data;
  } catch (error) {
    throw new Error("Error al obtener tareas");
  }
};

export const createTasksRequest = async (
  data: CreateTasks
): Promise<TaskTypes> => {
  try {
    const response = await axios.post("/tasks", data); // <-- ahora sí usa tu instancia con baseURL
    return response.data;
  } catch (error) {
    throw new Error("Error al crear la tarea");
  }
};

export const updateTasksRequest = async (
  id: number,
  data: UpdateTasks
): Promise<TaskTypes> => {
  try {
    const response = await axios.put(`/tasks/${id}`, data);
    return response.data;
  } catch (error) {
    throw new Error("Error al actualizar la tarea");
  }
};

export const deleteTasksRequest = async (id: number): Promise<TaskTypes> => {
  try {
    const response = await axios.delete(`/tasks/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("Error al eliminar la tarea");
  }
};
