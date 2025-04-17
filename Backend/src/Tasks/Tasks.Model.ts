// src/models/task.model.ts

import { Task } from "@prisma/client";
import { CreateTasks, UpdateTasks } from "./TaskTypes";
import { prisma } from "../prismaConfig";

export class TaskModel {
  async createTask(data: CreateTasks): Promise<Task> {
    try {
      return await prisma.task.create({ data });
    } catch (error) {
      console.error("Error al crear tarea:", error);
      throw new Error("No se pudo crear la tarea.");
    }
  }

  async updateTask(id: number, data: UpdateTasks): Promise<Task> {
    try {
      return await prisma.task.update({
        where: { id },
        data,
      });
    } catch (error) {
      console.error("Error al actualizar tarea:", error);
      throw new Error("No se pudo actualizar la tarea.");
    }
  }

  async getTasks(): Promise<Task[]> {
    try {
      return await prisma.task.findMany();
    } catch (error) {
      console.error("Error al obtener tareas:", error);
      throw new Error("No se pudieron obtener las tareas.");
    }
  }

  async deleteTask(id: number): Promise<Task> {
    try {
      return await prisma.task.delete({
        where: { id },
      });
    } catch (error) {
      console.error("Error al eliminar tarea:", error);
      throw new Error("No se pudo eliminar la tarea.");
    }
  }

  async getByID(id: number): Promise<Task | null> {
    try {
      return await prisma.task.findUnique({
        where: {
          id: Number(id),
        },
      });
    } catch (error) {
      throw new Error("No se pudo buscar la tarea.");
    }
  }
}
