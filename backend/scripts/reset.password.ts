import bcrypt from "bcrypt";
import connection from "../src/config/connection.js";

async function resetPasswords() {
  try {
    // Fetch all users
    const result = await connection.query("SELECT id, password FROM users");
    const users = result.rows;

    for (const user of users) {
      const currentPassword = user.password;

      // If password is already hashed (starts with $2b$), skip
      if (currentPassword.startsWith("$2b$")) {
        console.log(`User ${user.id} already has a hashed password, skipping.`);
        continue;
      }

      // Otherwise, hash the plain-text password
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(currentPassword, saltRounds);

      // Update the user record
      await connection.query("UPDATE users SET password = $1 WHERE id = $2", [
        hashedPassword,
        user.id,
      ]);

      console.log(`User ${user.id} password re-hashed successfully.`);
    }

    console.log("✅ Password reset complete.");
  } catch (err) {
    console.error("Error resetting passwords:", err);
  } finally {
    connection.end();
  }
}

resetPasswords();
