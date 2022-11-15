import { Sequelize } from "sequelize";

const db = new Sequelize("jrs_db", "root", "password", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
