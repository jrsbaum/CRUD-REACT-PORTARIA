import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const User = db.define(
  "users",
  {
    nome: DataTypes.STRING,
    rg: DataTypes.STRING,
    empresa: DataTypes.STRING,
    servico_tipo: DataTypes.STRING,
    carro: DataTypes.STRING,
    casa_cliente: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default User;

(async () => {
  await db.sync();
})();
