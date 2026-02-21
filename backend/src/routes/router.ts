import { Router } from "express";
import users from "../controller/users.controller.js";
import books from "../controller/books.controller.js";
import reservations from "../controller/reservations.controller.js";

const router = Router();

router.use("/api/auth", users);
router.use("/api/books", books);
router.use("/api/reservations", reservations);

export default router;
