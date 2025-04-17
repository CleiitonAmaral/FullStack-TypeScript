import { Task } from "@prisma/client";
import { TaskModel } from "./Tasks.Model";
import { CreateTasks, UpdateTasks } from "./TaskTypes";

const taskModel = new TaskModel();

export const getAllTasksService = async (): Promise<Task[]> => {
  try {
    return await taskModel.getTasks();
  } catch (error) {
    throw new Error("Error al crear una tarea");
  }
};

export const getByIdService = async (id: number): Promise<Task | null> => {
  try {
    return await taskModel.getByID(id);
  } catch (error) {
    throw new Error("Error al encontrrar la tarea por id");
  }
};

export const createTasksService = async (data: CreateTasks): Promise<Task> => {
  try {
    return await taskModel.createTask(data);
  } catch (error) {
    throw new Error("Error al crear una tarea");
  }
};

export const deleteService = async (id: number): Promise<Task> => {
  try {
    return await taskModel.deleteTask(id);
  } catch (error) {
    throw new Error("Error al eliminar una tarea");
  }
};

export const updateService = async (
  id: number,
  data: UpdateTasks
): Promise<Task> => {
  try {
    return await taskModel.updateTask(id, data);
  } catch (error) {
    throw new Error("Error al actualizar una tarea");
  }
};
