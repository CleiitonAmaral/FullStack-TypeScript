import express from "express";
import dotenv from "dotenv";
import TaskRoute from "./Tasks/task.routes";
import cors from "cors";
dotenv.config();

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true, 
  })
);

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/", TaskRoute);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
