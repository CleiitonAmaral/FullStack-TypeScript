import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import TaskPage from "./features/Tasks/pages/TaskPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TaskPage />} />
          <Route path="/" element={""} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
