import { Pool } from "pg";

const connectionString = 'postgress://mvbox:mvbox@localhost:5438/zao';

const db = new Pool({ connectionString });

export default db;