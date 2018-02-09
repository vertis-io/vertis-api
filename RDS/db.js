const Sequelize = require('sequelize');
console.log(process.env.RDS_DB, process.env.RDS_USER, process.env.RDS_PASSWORD,process.env.RDS_URL);
const db = new Sequelize(process.env.RDS_DB, process.env.RDS_USER, process.env.RDS_PASSWORD, {
  host: process.env.RDS_URL,
  port: 5432,
  dialect: 'postgres',
  dialectOptions: {
      ssl:'Amazon RDS'
  },
  language: 'en'
})

export default db;