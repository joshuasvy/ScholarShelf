import { Router } from "express";
import users from "../api/users.js";

const router = Router();

router.use("/api/users", users);

export default router;
