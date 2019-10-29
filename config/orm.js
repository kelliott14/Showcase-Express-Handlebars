var connection = require("./connection.js");

var orm = {
    addBurger: function(table, burger_name, cb) {
        var queryString = "INSERT INTO ?? (burger_name) VALUES(?)";
        connection.query(queryString, [table, burger_name], function(err, result){
            if (err) { 
                throw err;
            }
            cb(result)

        });
    },

    devourBurger: function(table, id, cb) {
        var queryString = "UPDATE ?? SET devoured = 1 WHERE id = ?";
        connection.query(queryString, [table, id], function(err, result){
            if (err) {
                throw err
            }
           // cb(result)
    
            });
    },

    all: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
          
        });
      }
};

module.exports = orm;