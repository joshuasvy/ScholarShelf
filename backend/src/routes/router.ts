import { Router } from "express";
import users from "../controller/users.controller.js";

const router = Router();

router.use("/api/users", users);

export default router;
