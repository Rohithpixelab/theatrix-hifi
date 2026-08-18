const { Pool } = require("pg");

const connectionString =
  process.env.DATABASE_URI ||
  "postgresql://postgres:bdZav7sIhikpoSiU@db.ritytneezrswjydiqqdy.supabase.co:5432/postgres";

console.log("Testing connection string:", connectionString);

const pool = new Pool({
  connectionString,
  ssl: { rejectUnauthorized: false },
});

pool.connect((err, client, release) => {
  if (err) {
    console.error("Connection failed:", err.message);
  } else {
    console.log("SUCCESS! Connected to Supabase PostgreSQL database!");
    client.query("SELECT NOW()", (queryErr, res) => {
      release();
      if (queryErr) {
        console.error("Query error:", queryErr.message);
      } else {
        console.log("Database time:", res.rows[0].now);
      }
      process.exit(0);
    });
  }
});
