export interface TaskTypes {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  createAt: string;
  updateAt: string;
}



export type CreateTasks = Omit<TaskTypes, "id", "completed", "createAt", "updateAt">

export type UpdateTasks = Partial<Pick<Task, "title" | "description" | "completed">>