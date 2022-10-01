
const { Sequelize } = require('sequelize')

const { dbName, dbConfig } = require('./config.json')
const dialect = 'mssql'
const host = dbConfig.server
const { userName, password } = dbConfig.authentication.options
var sequelize = new Sequelize(dbName, userName, password, {
    host: host,
    dialect: 'mssql',
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
    dialectOptions: {
      encrypt: true
    }
  })
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    })
