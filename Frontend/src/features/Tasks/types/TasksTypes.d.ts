export interface TaskTypes {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  createAt: string;
  updateAt: string;
}

export type CreateTasks = Omit<
  TaskTypes,
  "id" | "completed" | "createAt" | "updateAt"
>;

export type UpdateTasks = Partial<Omit<TaskTypes, "createAt" | "updateAt">>;
export type FormType = Pick<TaskTypes, "title" | "description">;
