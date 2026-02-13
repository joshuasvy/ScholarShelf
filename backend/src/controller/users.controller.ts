import { Router } from "express";
import { insertUsers } from "../models/users.js";
import { generateToken, generateRefreshToken } from "../helper/authToken.js";
import bcrypt from "bcrypt";
import connection from "../config/connection.js";

const router = Router();

function validatePassword(password: string): boolean {
  const regex = /^(?=.*[0-9]).{8,}$/;
  return regex.test(password);
}

router.post("/signup", async (req, res) => {
  const { name, email, contact, address, password } = req.body;

  if (!validatePassword(password)) {
    return res
      .status(400)
      .json({ message: "Password does not meet the requirements" });
  }

  try {
    const user = await insertUsers(name, email, contact, address, password);
    res.status(201).json(user);
  } catch (err: any) {
    if (err.code === "23505") {
      return res.status(409).json({ message: "Email already exists" });
    }
    console.log("Failed to create user:", err);
    res.status(500).json({ error: err.message });
  }
});

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  console.log("Login body:", req.body);

  try {
    const result = await connection.query(
      "SELECT * FROM users WHERE email = $1",
      [email],
    );
    console.log("Login query result:", result.rows);

    if (result.rows.length === 0) {
      return res.status(401).json({ error: "Account doesn't exist" });
    }

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    const user = result.rows[0];
    console.log("User from DB:", user);

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const accessToken = generateToken(user.id);
    const refreshToken = generateRefreshToken(user.id);

    await connection.query(
      "INSERT INTO refresh_token (user_id, token) VALUES ($1, $2)",
      [user.id, refreshToken],
    );

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
    });

    res.json({ accessToken });
  } catch (err: any) {
    console.error("Failed to login:", err);
    res.status(500).json({ error: err.message });
  }
});

export default router;
