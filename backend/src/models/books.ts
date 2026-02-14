import connection from "../config/connection.js";
import { Book } from "../types/types.js";

export async function insertBooks(
  book_cover: string,
  book_cover_public_id: string,
  title: string,
  sub_title: string | null,
  author: string,
  language: string,
  abstract: string,
  publisher: string,
  year: number,
  citation: string | null,
  topic: string,
  shelf_code: number,
  status: string = "Available",
): Promise<Book> {
  const query = `
    INSERT INTO books (
      book_cover, 
      book_cover_public_id,
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
      status
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
    RETURNING *;
    `;

  const values = [
    book_cover,
    book_cover_public_id,
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
  ];
  const result = await connection.query(query, values);

  if (result.rows.length === 0) {
    throw new Error("Failed to insert book");
  }

  const book: Book = result.rows[0];
  console.log("Inserted book:", book.id, book.title);
  return book;
}

export async function getAllBooks() {
  const query = `SELECT * FROM books ORDER BY created_at DESC;`;
  const result = await connection.query(query);
  console.log("Retrieved all books:", result.rows);
  return result.rows;
}

export async function getBookById(id: number) {
  const query = `SELECT * FROM books WHERE id = $1;`;
  const values = [id];
  const result = await connection.query(query, values);
  console.log("Retrieved book by ID:", result.rows[0]);
  return result.rows[0];
}

export async function updateBook(
  id: number,
  book_cover: string,
  title: string,
  sub_title: string,
  author: string,
  language: string,
  abstract: string,
  publisher: string,
  year: number,
  citation: string,
  topic: string,
  shelf_code: number,
  status: string,
) {
  const query = `
    UPDATE books 
    SET book_cover = $1, 
        title = $2, 
        sub_title = $3, 
        author = $4, 
        language = $5, 
        abstract = $6, 
        publisher = $7, 
        year = $8, 
        citation = $9, 
        topic = $10, 
        shelf_code = $11, 
        status = $12, 
        updated_at = CURRENT_TIMESTAMP 
    WHERE id = $13
    RETURNING *; 
  `;

  const values = [
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
    id,
  ];

  const result = await connection.query(query, values);
  console.log("Updated book:", result.rows[0]);
  return result.rows[0];
}
