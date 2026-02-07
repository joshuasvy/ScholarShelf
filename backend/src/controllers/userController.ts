import { Router } from "express";
import { insertUsers } from "../models/users.js";

const router = Router();

router.post("/", async (req, res) => {
  const { name, email, contact, address, password } = req.body;
  try {
    const user = await insertUsers(name, email, contact, address, password);
    res.status(201).json(user);
  } catch (err: any) {
    console.log("Failed to create user:", err);
    res.status(500).json({ error: err.message });
  }
});

export default router;
