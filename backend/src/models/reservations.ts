import connection from "../config/connection.js";

export async function createReservation(userId: number, bookId: number) {
  const client = await connection.connect();

  try {
    await client.query("BEGIN");

    const bookResult = await client.query(
      `SELECT id, title, available_copies
      FROM books WHERE id = $1  FOR UPDATE`,
      [bookId],
    );

    if (bookResult.rowCount === 0) {
      throw new Error("Book not found");
    }

    const book = bookResult.rows[0];

    if (book.available_copies <= 0) {
      throw new Error("Book is not available");
    }

    const existing = await client.query(
      `SELECT id FROM reservations
      WHERE book_id = $1 AND user_id = $2
      AND status IN ('Pending', 'Approved')`,
      [bookId, userId],
    );

    if ((existing.rowCount ?? 0) > 0) {
      throw new Error("Book already reserved");
    }

    const reservation = await client.query(
      `INSERT INTO reservations (user_id, book_id)
      VALUES ($1, $2) RETURNING *`,
      [userId, bookId],
    );

    await client.query(
      `UPDATE books
      SET available_copies = available_copies - 1
      WHERE id = $1`,
      [bookId],
    );

    await client.query("COMMIT");

    return { reservation: reservation.rows[0], bookTitle: book.title };
  } catch (err) {
    await client.query("ROLLBACK");
    throw err;
  } finally {
    client.release();
  }
}
