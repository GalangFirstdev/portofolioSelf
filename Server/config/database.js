
import dotenv from "dotenv"
dotenv.config();
// env look
import { Sequelize } from "sequelize";

const db = new Sequelize('auth_db' ,process.env.DB_USER, process.env.PW_DB , {
        host : "localhost",
        dialect : "mysql"
})


export default db;