const Sequelize = require("sequelize");
const connection = require("../database/db");

const Instru = connection.define(
  "instru",  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },

    nome: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    imagem: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    cor: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    datadefabricacao: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    caracteristica: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    valor: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    formadepagamento: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = Instru