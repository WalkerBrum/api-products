import { Sequelize } from 'sequelize'

const db = new Sequelize('postgres://walker_lobato:teste@localhost:5432/products')

export default db