const { Client } = require("pg");
require("dotenv").config();

const config = {
  user: process.env.DATABASE_USER,
  host: process.env.DATABASE_HOST,
  password: process.env.DATABASE_PASSWORD,
  port: parseInt(process.env.DATABASE_PORT, 10),
};
const dbName = process.env.DATABASE_NAME;

const client = new Client(config);

async function createDatabase() {
  try {
    await client.connect();
    const res = await client.query(
      `SELECT 1 FROM pg_database WHERE datname='${dbName}'`,
    );
    if (res.rowCount === 0) {
      await client.query(`CREATE DATABASE ${dbName}`);
      console.log(`Database ${dbName} created successfully.`);
    } else {
      console.log(`Database ${dbName} already exists.`);
    }
  } catch (err) {
    console.error("Error creating database:", err);
  } finally {
    await client.end();
  }
}

(async () => {
  await createDatabase();
})();
