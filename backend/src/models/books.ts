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
  status: string = "Available",
): Promise<Book> {
  const client = await connection.connect();

  try {
    await client.query("BEGIN");

    const counterQuery = `
      INSERT INTO topic_shelf_code (topic, code)
      VALUES ($1, 1)
      ON CONFLICT (topic)
      DO UPDATE SET CODE = topic_shelf_code.code + 1
      RETURNING code;
    `;

    const counterResult = await client.query(counterQuery, [topic]);
    const nextCode = counterResult.rows[0].code;
    const shelf_code = nextCode.toString().padStart(5, "0");

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
    await client.query("COMMIT");

    if (result.rows.length === 0) {
      throw new Error("Failed to insert book");
    }

    return result.rows[0] as Book;
  } catch (err) {
    await client.query("ROLLBACK");
    throw err;
  } finally {
    client.release();
  }
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
