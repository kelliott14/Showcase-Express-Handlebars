var orm = require("../config/orm");

var burger = {
    addBurger: function(burger_name) {
        orm.addBurger(burger_name), function(res) {
            cb(res)
        };
    },

    devourBurger: function(id) {
        orm.devourBurger(id), function(res) {
            cb(res)
        };
    },

    selectAll: function() {
        orm.selectAll(), function(res) {
            cb(res)
        }
    }
}

module.exports = burger;