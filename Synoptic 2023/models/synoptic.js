
const mysql = require('mysql');

var connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "password",
    database: "synoptic"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Conencted with Database Successfully");
});

module.exports = connection;