import { Pool } from "pg";

const connection = new Pool({
  user: "postgres",
  host: "localhost",
  database: "scholarshelf",
  password: "postgres",
  port: 2004,
  options: "-c search_path=public",
});

const result = await connection.query(
  "SELECT current_database(), current_schema()",
);
console.log(result.rows);

export default connection;
