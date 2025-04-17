import { Request, Response, NextFunction } from "express";
import {
  createTasksService,
  deleteService,
  getAllTasksService,
  getByIdService,
  updateService,
} from "./TaskService";

const handleError = (res: Response, error: unknown, message: string): void => {
  console.error(error);
  res.status(500).json({ error: message });
};

export const getTask = async (
  _req: Request,
  res: Response,
  _next: NextFunction
): Promise<void> => {
  try {
    const tasks = await getAllTasksService();
    res.status(200).json(tasks);
  } catch (error) {
    handleError(res, error, "Error al obtener las tareas.");
  }
};

export const createTask = async (
  req: Request,
  res: Response,
  _next: NextFunction
): Promise<void> => {
  try {
    const data = req.body;
    const newTask = await createTasksService(data);
    res.status(201).json(newTask);
  } catch (error) {
    handleError(res, error, "Error al crear la tarea.");
  }
};

export const updateTasks = async (
  req: Request,
  res: Response,
  _next: NextFunction
): Promise<void> => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) throw new Error("ID inválido.");

    const foundTask = await getByIdService(id);

    if (!foundTask) {
      res.status(401).json({ message: "no se encontro la tarea" });
    }
    const data = req.body;
    const updated = await updateService(id, data);
    res.status(200).json(updated);
  } catch (error) {
    handleError(res, error, "Error al actualizar la tarea.");
  }
};

export const deleteTask = async (
  req: Request<{ id: string }>,
  res: Response,
  _next: NextFunction
): Promise<void> => {
  try {
    const id = Number(req.params.id);
    const foundTask = await getByIdService(id);

    if (!foundTask) {
      res.status(401).json({ message: "no se encontro la tarea" });
    }

    if (isNaN(id)) throw new Error("ID inválido.");
    const deleted = await deleteService(id);
    res.status(200).json(deleted);
  } catch (error) {
    handleError(res, error, "Error al eliminar la tarea.");
  }
};
