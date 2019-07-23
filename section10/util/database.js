const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'nodejscourse',
    password: 'islanders'
});

module.exports = pool.promise();
