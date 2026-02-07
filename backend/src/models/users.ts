import connection from "../config/connection.js";

export async function insertUsers(
  name: string,
  email: string,
  contact: string,
  address: string,
  password: string,
) {
  const query = `
    INSERT INTO users (name, email, contact, address, password)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;
  `;

  const values = [name, email, contact, address, password];
  const result = await connection.query(query, values);
  console.log("Inserted user:", result.rows[0]);
  return result.rows[0];
}
