import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Acesso = db.define("acesso", {
  nome: {
    type: DataTypes.STRING,
  },
  rg: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  empresa: {
    type: DataTypes.STRING,
  },
  servico_tipo: {
    type: DataTypes.STRING,
  },
  carro: {
    type: DataTypes.STRING,
  },
  casa_cliente: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  freezeTableName: true,
});

export default Acesso;
