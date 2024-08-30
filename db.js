import "dotenv/config";
import postgres from "postgres";


// CONNECTION WITH POSTGRES
// USES PROJECT ID TO CONNECT TO THE CORRECT DATABASE
let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;

export const sql = postgres({
  host: PGHOST,
  database: PGDATABASE,
  username: PGUSER,
  password: PGPASSWORD,
  port: 5432,
  ssl: "require",
  connection: {
    options: `project=${ENDPOINT_ID}`,
  },
});
