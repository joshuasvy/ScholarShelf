import { Router } from "express";
import {
  insertBooks,
  getAllBooks,
  getBookById,
  updateBook,
} from "../models/books.js";

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
    if (!book_cover || !title || !author || !publisher || !year) {
      return res
        .status(400)
        .json({ message: "Please fill in all required fields" });
    }

    if (year && isNaN(Number(year))) {
      return res.status(400).json({ message: "Year must be a valid number" });
    }

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
    const getBooks = await getAllBooks();
    res.json(getBooks);
  } catch (error: any) {
    console.log("Failed to retrieve books:", error);
    res.status(500).json({ error: error.message });
  }
});

// Getting a specific book by its ID
router.get("/:id", async (req, res) => {
  try {
    const getBooksById = await getBookById(Number(req.params.id));
    if (!getBooksById)
      return res.status(404).json({ message: "Book not found" });
    res.status(200).json(getBooksById);
  } catch (error: any) {
    console.log("Failed to retrieve book by ID:", error);
    res.status(500).json({ error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedBook = await updateBook(
      Number(req.params.id),
      req.body.book_cover,
      req.body.title,
      req.body.sub_title,
      req.body.author,
      req.body.language,
      req.body.abstract,
      req.body.publisher,
      req.body.year,
      req.body.citation,
      req.body.topic,
      req.body.shelf_code,
      req.body.status,
    );
    if (!updatedBook)
      return res.status(404).json({ message: "Book not found" });
    res.status(200).json(updatedBook);
  } catch (error: any) {
    console.log("Failed to update book:", error);
    res.status(500).json({ error: error.message });
  }
});

export default router;
