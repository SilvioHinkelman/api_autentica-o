import { Pool } from "pg";

const connectionString = "postgres://xtpdwanw:iomSIrhG8T_jmGisfArSRK1Ac_cmiziC@kesavan.db.elephantsql.com/xtpdwanw";

const db = new Pool({ connectionString });

export default db;
