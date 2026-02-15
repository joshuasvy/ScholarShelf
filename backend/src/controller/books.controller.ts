import { Router } from "express";
import {
  insertBooks,
  getAllBooks,
  getBookById,
  updateBook,
} from "../models/books.js";
import multer from "multer";
import cloudinary from "../config/cloudinary.js";
import validateBooksPayload from "../helper/validateBooksPayload.js";

const router = Router();

const upload = multer({ dest: "uploads/" });

// Admin action route to add a book to the database
router.post("/", upload.single("book_cover"), async (req, res) => {
  const {
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

  let uploadBookCover: { public_id: string; secure_url: string } | undefined;

  try {
    validateBooksPayload(req.body, req.file);

    if (!req.file) {
      return res.status(400).json({ message: "Book cover is required" });
    }

    uploadBookCover = await cloudinary.uploader.upload(req.file.path, {
      folder: "ScholarShelf Books",
    });

    const addBooks = await insertBooks(
      uploadBookCover.secure_url,
      uploadBookCover.public_id,
      title,
      sub_title,
      author,
      language,
      abstract,
      publisher,
      Number(year),
      citation,
      topic,
      shelf_code,
      status,
    );
    res.status(201).json(addBooks);
    console.log("Book added successfully:", addBooks);
  } catch (error: any) {
    if (uploadBookCover) {
      console.log(
        "Rolling back cloudinary upload due to duplicate book entry:",
        error.detail,
      );
      await cloudinary.uploader.destroy(uploadBookCover.public_id);
    }

    if (error.code === "23505") {
      return res
        .status(409)
        .json({ message: "Book already exists", detail: error.detail });
    }

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

    res
      .status(200)
      .json({ message: "Book updated successfully", book: updatedBook });
  } catch (error: any) {
    if (error.code === "23505") {
      return res
        .status(409)
        .json({ message: "Book already exists", detail: error.detail });
    }
    console.log("Failed to update book:", error);
    res.status(500).json({ error: error.message });
  }
});

export default router;
