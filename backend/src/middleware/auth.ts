import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export interface AuthRequest extends Request {
  user?: {
    userId: number;
  };
}

export function authenticationToken(
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Access token is required" });
  }

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_SECRET!) as {
      userId: number;
    };

    req.user = { userId: decoded.userId };
    next();
  } catch (err) {
    return res
      .status(403)
      .json({ messsage: "Invalid or expired access token" });
  }
}
