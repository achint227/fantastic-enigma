
const { Sequelize } = require('sequelize')

const { dbName, dbConfig } = require('./config.json')
const dialect = 'mssql'
const host = dbConfig.server
const { userName, password } = dbConfig.authentication.options
const sequelize = new Sequelize(dbName, userName, password, { host, dialect })
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    })