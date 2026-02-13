import { Router } from "express";
import { insertBooks } from "../models/books.js";
import connection from "../config/connection.js";

const router = Router();

// Admin action route to add a book to the database
router.post("/", async (req, res) => {
  const {
    book_cover,
    title,
    sub_title,
    author,
    language,
    abstract,
    publisher,
    year,
    citation,
    topic,
    shelf_code,
    status,
  } = req.body;

  try {
    const addBooks = await insertBooks(
      book_cover,
      title,
      sub_title,
      author,
      language,
      abstract,
      publisher,
      year,
      citation,
      topic,
      shelf_code,
      status,
    );
    res.status(201).json(addBooks);
    console.log("Book added successfully:", addBooks);
  } catch (error: any) {
    console.log("Failed to add book:", error);
    res.status(500).json({ error: error.message });
  }
});

// Getting all the uploaded books from the database
router.get("/", async (req, res) => {
  try {
    const getBooks = await connection.query(
      "SELECT * FROM books ORDER BY created_at DESC",
    );
    res.status(200).json(getBooks.rows);
    // console.log("Retrieved books:", getBooks.rows);
  } catch (error: any) {
    console.log("Failed to retrieve books:", error);
    res.status(500).json({ error: error.message });
  }
});

// Getting a specific book by its ID
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const getBooksById = await connection.query(
      "SELECT * FROM books WHERE id = $1",
      [id],
    );

    if (getBooksById.rows.length === 0) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json(getBooksById.rows[0]);
    console.log("Retrieved book by ID:", getBooksById.rows[0]);
  } catch (error: any) {
    console.log("Failed to retrieve book by ID:", error);
    res.status(500).json({ error: error.message });
  }
});

export default router;
