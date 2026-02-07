// scripts/hashPasswords.ts
import connection from "../src/config/connection.js";
import bcrypt from "bcrypt";

async function hashExistingPasswords() {
  try {
    // 1. Fetch all users
    const users = await connection.query(
      "SELECT id, password FROM public.users;",
    );

    for (const user of users.rows) {
      const plainPassword = user.password;

      // Skip if already hashed (bcrypt hashes start with $2b$ or $2a$)
      if (
        plainPassword.startsWith("$2b$") ||
        plainPassword.startsWith("$2a$")
      ) {
        console.log(`User ${user.id} already hashed, skipping.`);
        continue;
      }

      // 2. Hash the password
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);

      // 3. Update the user record
      await connection.query(
        "UPDATE public.users SET password = $1 WHERE id = $2",
        [hashedPassword, user.id],
      );

      console.log(`User ${user.id} password hashed.`);
    }

    console.log("✅ All plain-text passwords have been hashed.");
  } catch (err) {
    console.error("Error hashing passwords:", err);
  } finally {
    await connection.end();
  }
}

hashExistingPasswords();
