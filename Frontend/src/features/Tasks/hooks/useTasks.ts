import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import { CreateTasks, TaskTypes, UpdateTasks } from "../types/TasksTypes";
import {
  createTaskService,
  deleteTaskService,
  getTasksService,
  updateTaskService,
} from "../services/tasksServices";

export const useTasks = () => {
  const queryClient = useQueryClient();

  // Obtener tareas
  const {
    data: tasks,
    isLoading,
    isError,
    error,
  } = useQuery<TaskTypes[], Error>({
    queryKey: ["tasks"],
    queryFn: getTasksService,
  });

  // Crear tarea
  const {
    mutate: createTask,
    status: createTaskStatus,
    error: createTaskError,
    isPending: isCreating,
  } = useMutation({
    mutationFn: (data: CreateTasks) => createTaskService(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  // Actualizar tarea
  const {
    mutate: updateTask,
    status: updateTaskStatus,
    error: updateTaskError,
    isPending: isUpdating,
  } = useMutation({
    mutationFn: ({ id, data }: { id: number; data: UpdateTasks }) =>
      updateTaskService(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  // Eliminar tarea
  const {
    mutate: deleteTask,
    status: deleteTaskStatus,
    error: deleteTaskError,
    isPending: isDeleting,
  } = useMutation({
    mutationFn: (id: number) => deleteTaskService(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  return {
    query: {
      tasks,
      isLoading,
      isError,
      error,
    },
    create: {
       createTask,
      status: createTaskStatus,
      error: createTaskError,
      isPending: isCreating,
    },
    update: {
       updateTask,
      status: updateTaskStatus,
      error: updateTaskError,
      isPending: isUpdating,
    },
    remove: {
      deleteTask,
      status: deleteTaskStatus,
      error: deleteTaskError,
      isPending: isDeleting,
    },
  };
};
