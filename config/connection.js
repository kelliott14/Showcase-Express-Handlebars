var mySQL = require("mysql")

var connection = mySQL.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password : "RickyPonting14",
    database : 'burgers_db'
  });

  connection.connect(function(err){
      if(err) {
          console.log("error connection: " + err.stack);
          return
      }
      console.log("connected as id " + connection.threadId);
  })

  module.exports = connection;