import {
  createReservation,
  getReservationUser,
} from "../models/reservations.js";
import { authenticationToken, AuthRequest } from "../middleware/auth.js";
import { Router, Response } from "express";

const router = Router();

router.post(
  "/",
  authenticationToken,
  async (req: AuthRequest, res: Response) => {
    const userId = req.user!.userId;
    const { book_id } = req.body;

    if (!book_id) {
      return res.status(400).json({ message: "book_id is required" });
    }

    try {
      const result = await createReservation(userId, book_id);
      res.status(201).json({
        message: `"${result.bookTitle}" has been reserved successfully`,
        reservation: result.reservation,
      });
    } catch (err: any) {
      const notFoundError = ["Book not found"];
      const conflictError = ["Book is not available, Book already reserved"];

      if (notFoundError.includes(err.message)) {
        return res.status(404).json({ message: err.message });
      }

      if (conflictError.includes(err.message)) {
        return res.status(409).json({ message: err.message });
      }

      console.error("Reserved book error:", err);
      res
        .status(500)
        .json({ message: "Something went wrong. Please try again" });
    }
  },
);

router.get("/me", authenticationToken, async (req: AuthRequest, res) => {
  const userId = req.user!.userId;

  try {
    const result = await getReservationUser(userId);
    res.json(result);
  } catch (err: any) {
    console.error("Reserved book error:", err);
    res.status(500).json({ message: "Something went wrong. Please try again" });
  }
});

export default router;
