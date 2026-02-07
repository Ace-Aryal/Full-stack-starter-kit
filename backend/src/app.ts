import express from "express";
import cors from "cors";
const app = express();
import userRouter from "./routes/users.route.js";
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api/v1/users", userRouter);

export { app };
