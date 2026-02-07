import connection from "./config/connection.js";

async function testConnection() {
  try {
    const result = await connection.query("SELECT NOW()");
    console.log("✔️ Connected to Postgres at:", result.rows[0].now);
  } catch (err) {
    console.log("Database connection failed:", err);
  } finally {
    connection.end();
  }
}

testConnection();
