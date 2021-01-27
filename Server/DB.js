let mysql = require('mysql2');
let constants = require('./Constants');

const connection = mysql.createPool({
    connectionLimit:100,
    host:'localhost',
    user:'root',
    password:constants.DB_PASS,
    database:'workday'
});

module.exports = {
    pool:connection
}