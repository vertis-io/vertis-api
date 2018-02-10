const Sequelize = require('sequelize');
const db = new Sequelize(process.env.RDS_DB, process.env.RDS_USER, process.env.RDS_PASSWORD, {
  host: process.env.RDS_URL,
  port: process.env.RDS_PORT,
  dialect: 'postgres',
  dialectOptions: {
      ssl:'Amazon RDS'
  },
  language: 'en'
})

export default db;