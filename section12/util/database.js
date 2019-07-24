const Sequelize = require('sequelize');

const sequelize = new Sequelize('nodejscourse', 'root', process.env.SEQUEL_PASS, {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
