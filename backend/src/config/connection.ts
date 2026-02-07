import { Pool } from "pg";

const connection = new Pool({
  user: "postgres",
  host: "localhost",
  database: "scholarshelf",
  password: "postgres",
  port: 5432,
  options: "-c search_path=public",
});

export default connection;
