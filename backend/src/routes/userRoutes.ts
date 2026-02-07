import express from "express";
import userController from "../controllers/userController.js";

const app = express();
app.use(express.json());

app.use("/", userController);

export default app;
