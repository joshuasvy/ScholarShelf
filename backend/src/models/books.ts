import connection from "../config/connection.js";

export async function insertBooks(
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
    INSERT INTO books (book_cover, title, sub_title, author, language, abstract, publisher, year, citation, topic, shelf_code, status) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
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
    status || "Available",
  ];
  const result = await connection.query(query, values);
  console.log("Inserted book:", result.rows[0]);
  return result.rows[0];
}
