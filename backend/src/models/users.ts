import bcrypt from "bcrypt";
import connection from "../config/connection.js";

export async function insertUsers(
  name: string,
  email: string,
  contact: string,
  address: string,
  password: string,
) {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  const query = `
    INSERT INTO users (name, email, contact, address, password)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;
  `;

  const values = [name, email, contact, address, hashedPassword];
  const result = await connection.query(query, values);
  console.log("Inserted user:", result.rows[0]);
  return result.rows[0];
}
