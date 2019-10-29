var orm = require("../config/orm.js");

var burger = {
    addBurger: function(burger_name, cb) {
        orm.addBurger(burger_name), function(res) {
            cb(res)
        };
    },

    devourBurger: function(id, cb) {
        orm.devourBurger(id), function(res) {
            cb(res)
        };
    },

    all: function(cb) {
        orm.all("burgers", function(res) {
          cb(res);
          console.log(res)
        });
      }
}

module.exports = burger;

console.log(burger)