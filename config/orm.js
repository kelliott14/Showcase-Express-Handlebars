var connection = require("./connection.js");

var orm = {
    addBurger: function(burger_name) {
        var queryString = "INSERT INTO burgers (burger_name) VALUES(?)";
        connection.query(queryString, [burger_name], function(err, result){
            if (err) { 
                throw err;
            }
        return result

        });
    },

    devourBurger: function(id) {
        var queryString = "UPDATE burgers SET devoursed = 1 WHERE id = ?";
        connection.query(queryString, [id], function(err, result){
            if (err) {
                throw err
            }
            return result
    
            });
    },

    all: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
          console.log(cb)
        });
      }
};

module.exports = orm;