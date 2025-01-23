// file: sequelizeConnect.js
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('mydb', 'myuser', 'mypassword', {
  host: 'localhost',
  dialect: 'postgres', // or 'mysql', 'sqlite', 'mariadb' etc.
});
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection to PostgreSQL has been established successfully!');
  } catch (error) {
    console.error('Unable to connect:', error);
  }
}
testConnection();
module.exports = sequelize;
