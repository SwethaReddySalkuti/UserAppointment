const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'userapp',
    password: 'Swetha123@'
});

module.exports = pool.promise();