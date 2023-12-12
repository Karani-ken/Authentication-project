const dbConfig = require('../config/config')
const createDatabase = `CREATE DATABASE IF NOT EXISTS ${dbConfig.database}`
const createUsersTable = `CREATE TABLE users (id INT NOT NULL AUTO_INCREMENT, name VARCHAR(255),email VARCHAR(255),password VARCHAR(255))`;
const insertUsers = `INSERT INTO users (name,email,password) VALUES (?,?,?)`;
const showDatabases = `SHOW DATABASES LIKE "${dbConfig.database}"`;
const userDatabase = `USE ${dbConfig.database}`;
const showUsersTable = `SHOW TABLE LIKE "users"`;

module.exports ={
    createDatabase,
    createUsersTable,
    insertUsers,
    showDatabases,
    userDatabase,
    showUsersTable
}
