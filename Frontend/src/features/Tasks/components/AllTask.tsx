import { useTasks } from "../hooks/useTasks";
import TaskCard from "./TaskCard";

function AllTask() {
  const { query, remove, update } = useTasks();
  console.log("Tareas:", query.tasks, typeof query.tasks);

  if (query.isError)
    return <p className="text-red-500">Error cargando tareas...</p>;
  if (query.isLoading)
    return <p className="text-blue-500">Cargando tareas...</p>;

  const handleDelete = (id: number) => {
    const confirmDelete = window.confirm(
      "¿Estás seguro de que quieres eliminar esta tarea?"
    );
    if (confirmDelete) {
      remove.deleteTask(id);
    }
  };
  const handleUpdate = (taskId: number) => {
    update.updateTask({ id: taskId, data: { completed: true } });
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {query.tasks?.map((task) => (
        <TaskCard
          task={task}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
          isUpdating={update.isPending}
        />
      ))}
    </div>
  );
}

export default AllTask;
