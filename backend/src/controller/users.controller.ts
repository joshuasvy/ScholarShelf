import { Router } from "express";
import { insertUsers } from "../models/users.js";
import { generateToken, generateRefreshToken } from "../helper/authToken.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import connection from "../config/connection.js";

const router = Router();
dotenv.config();

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

router.post("/refresh-token", async (req, res) => {
  const refreshToken = req.body;

  if (!refreshToken) {
    return res.status(400).json({ message: "Refresh token is required" });
  }
  try {
    const decoded = jwt.verify(refreshToken, process.env.REFRESH_SECRET!) as {
      userId: string;
    };

    const result = await connection.query(
      "SELECT * FROM refresh_token WHERE token = $1",
      [refreshToken],
    );

    if (result.rows.length === 0) {
      return res.status(403).json({ message: "Invalid refresh token" });
    }

    const tokenData = result.rows[0];

    const now = new Date();
    if (new Date(tokenData.expires_at) < now) {
      return res.status(403).json({ message: "Refresh token has expired" });
    }

    const newAccessToken = generateToken(decoded.userId);
    return res.json({ accessToken: newAccessToken });
  } catch (err) {
    console.log("Failed to refresh token:", err);
    return res.status(403).json({ message: "Invalid refresh token" });
  }
});

export default router;
