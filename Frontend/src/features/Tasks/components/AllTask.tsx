import { useTasks } from "../hooks/useTasks";

function AllTask() {
  const { query } = useTasks();
  console.log("Tareas:", query.tasks, typeof query.tasks);

  if (query.isError)
    return <p className="text-red-500">Error cargando tareas...</p>;
  if (query.isLoading)
    return <p className="text-blue-500">Cargando tareas...</p>;

  const handleDelete = (taskId: number) => {
    console.log(`Eliminar tarea con ID: ${taskId}`);
  };

  const handleUpdate = (taskId: number) => {
    console.log(`Actualizar tarea con ID: ${taskId}`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {query.tasks?.map((task) => (
        <div
          key={task.id}
          className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">
            {task.title}
          </h3>
          <p className="text-gray-700 mb-4">{task.description}</p>

          <div className="flex justify-between items-center">
            <button
              onClick={() => handleUpdate(task.id)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none transition-colors duration-200"
            >
              Actualizar
            </button>
            <button
              onClick={() => handleDelete(task.id)}
              className="px-4 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 focus:outline-none transition-colors duration-200"
            >
              Eliminar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AllTask;
