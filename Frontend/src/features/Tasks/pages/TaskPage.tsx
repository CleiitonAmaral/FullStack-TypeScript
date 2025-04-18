import AllTask from "../components/AllTask";
import TaskForm from "../components/FormPage";

function TaskPage() {
  return (
    <main>
      <h1>Tareas</h1>
      <TaskForm />
      <AllTask />
    </main>
  );
}

export default TaskPage;
