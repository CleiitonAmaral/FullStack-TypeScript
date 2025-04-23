import { TaskTypes } from "../types/TasksTypes";

interface Props {
  task: TaskTypes;
  handleDelete: (taskId: number) => void;
  handleUpdate: (taskId: number, complete: boolean) => void;
  isUpdating: boolean;
}

function TaskCard({ task, handleDelete, handleUpdate, isUpdating }: Props) {
  return (
    <div>
      {
        <div
          key={task.id}
          className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
        >
          <span
            className={`${task.completed ? "text-green-600" : "text-red-500"} `}
          >
            {task.completed ? "Completado" : "En Proceso"}
          </span>
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">
            {task.title}
          </h3>
          <p className="text-gray-700 mb-4">{task.description}</p>

          <div className="flex justify-between items-center">
            <button
              onClick={() => handleUpdate(task.id, task.completed)}
              disabled={isUpdating}
              className={`px-4 py-2 ${
                isUpdating
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              } text-white rounded-lg shadow-md focus:outline-none transition-colors duration-200`}
            >
              {isUpdating
                ? "Actualizando..."
                : `Marcar como ${task.completed ? "pendiente" : "completado"}`}
            </button>

            <button
              onClick={() => handleDelete(task.id)}
              className="px-4 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 focus:outline-none transition-colors duration-200"
            >
              Eliminar
            </button>
          </div>
        </div>
      }
    </div>
  );
}

export default TaskCard;
