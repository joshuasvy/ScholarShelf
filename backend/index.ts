import express from "express";
import cors from "cors";
import userRoutes from "./src/routes/userRoutes.js";
import connection from "./src/config/connection.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
