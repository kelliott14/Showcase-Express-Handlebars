var mysql = require("mysql")

var connection = mySQL.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password : "RickyPonting14",
    database : 'burgers'
  });

  module.exports = connection;