import { Pool } from "pg";

const connectionString = "postgres://<link>";

const db = new Pool({ connectionString });

export default db;
