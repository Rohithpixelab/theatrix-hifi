const { Pool } = require("pg");

const projectRef = "ritytneezrswjydiqqdy";
const password = "bdZav7sIhikpoSiU";

const regions = [
  "ap-south-1", // Mumbai
  "us-east-1",  // N. Virginia
  "us-west-1",  // N. California
  "eu-central-1", // Frankfurt
  "eu-west-1",  // Ireland
  "ap-southeast-1", // Singapore
  "ap-southeast-2", // Sydney
];

async function testRegions() {
  for (const region of regions) {
    const host = `aws-0-${region}.pooler.supabase.com`;
    const connectionString = `postgresql://postgres.${projectRef}:${password}@${host}:6543/postgres`;
    console.log(`Testing region ${region} (${host})...`);

    const pool = new Pool({
      connectionString,
      ssl: { rejectUnauthorized: false },
      connectionTimeoutMillis: 3000,
    });

    try {
      const client = await pool.connect();
      const res = await client.query("SELECT NOW()");
      console.log(`\n🎉 SUCCESS! Connected to Supabase via ${region}!`);
      console.log(`Working connection string: ${connectionString}\n`);
      client.release();
      await pool.end();
      return connectionString;
    } catch (err) {
      console.log(`  Failed for ${region}: ${err.message}`);
      await pool.end().catch(() => {});
    }
  }
  console.log("No pooler region connected directly with this password.");
}

testRegions();
