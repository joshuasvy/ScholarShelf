import { createReservation } from "../models/reservations.js";
import { authenticationToken, AuthRequest } from "../middleware/auth.js";
import { Router } from "express";

const router = Router();

router.post("/", authenticationToken, async (req: AuthRequest, res) => {
  const userId = req.user!.userId;
  const { book_id } = req.body;

  if (!userId || !book_id) {
    return res
      .status(401)
      .json({ message: "User ID and book ID are required" });
  }

  try {
    const result = await createReservation(userId!, book_id);
    res.status(201).json({
      message: `"${result.bookTitle}" has been reserved successfully`,
      reservation: result.reservation,
    });
  } catch (err: any) {
    const clientError = [
      "Book not found",
      "Book is not available",
      "Book already reserved",
    ];

    if (clientError.includes(err.message)) {
      return res.status(409).json({ error: err.message });
    }

    console.error("Reserved book error:", err);
    res.status(500).json({ error: err.message });
  }
});

export default router;
