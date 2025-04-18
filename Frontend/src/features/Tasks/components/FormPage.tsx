import { useForm } from "react-hook-form";
import { type FormType } from "../types/TasksTypes";
import { useTasks } from "../hooks/useTasks";

function TaskForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormType>();
  const { create } = useTasks();

  const onSubmit = (data: FormType) => {
    create.createTask(data, {
      onSuccess: () => reset(),
    });

    reset();
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-[#f4f4f4] rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Crear nueva tarea
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Título
          </label>
          <input
            type="text"
            id="title"
            placeholder="Escribe un título..."
            {...register("title", { required: "El título es obligatorio" })}
            className={`mt-1 block w-full px-4 py-2 border text-black ${
              errors.title ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Descripcion
          </label>
          <textarea
            id="description"
            placeholder="Escribe un título..."
            {...register("description", {
              required: "El título es obligatorio",
            })}
            className={`mt-1 block w-full px-4 py-2 border  text-black ${
              errors.title ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
        >
          Guardar tarea
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
