import { Router } from "express";
import { insertUsers } from "../models/users.js";
import bcrypt from "bcrypt";
import connection from "../config/connection.js";

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

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await connection.query(
      "SELECT *FROM users WHERE email = $1",
      [email],
    );

    if (result.rows.length === 0) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const user = result.rows[0];

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    res.json({ message: "Login successful" });
  } catch (err: any) {
    console.log("Failed to login:", err);
    res.status(500).json({ error: err.message });
  }
});

export default router;
