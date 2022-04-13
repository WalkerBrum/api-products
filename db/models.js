import { Sequelize } from 'sequelize'
import db from "./db"

const Categoria = db.define("categorias", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
}, {
  timestamps: false,
});

const Produto = db.define("produtos", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  sku: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  estoque: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 0,
  },
  estoque: {
    type: Sequelize.INTEGER,
    references: {
      model: Categoria,
      key: 'id'
    }
  },
}, {
  timestamps: false,
});


db.sync()