import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export function generateToken(userId: string) {
  return jwt.sign({ userId }, process.env.ACCESS_SECRET!, { expiresIn: "3h" });
}

export function generateRefreshToken(userId: string) {
  return jwt.sign({ userId }, process.env.REFRESH_SECRET!, {
    expiresIn: "30d",
  });
}
