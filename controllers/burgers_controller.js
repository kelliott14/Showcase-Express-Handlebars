var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.all(function(data) {
      var hbsObject = {
        burgers: data
      };
      res.render("index", hbsObject);
    });
  });

router.post("/api/burgers", function(req, res) {
    burger.addBurger(["burger_name"], [req.body.name], function(result) {
        res.json({id: result.insertID});
    });
});

router.put("/api/burgers/:id", function(req, res) {
    var condition = req.params.id;
    console.log("condition ", condition);

    burger.devourBurger("burgers", condition, function(result) {
        if (result.changedRows === 0) {
            return res.status(404).end()
        }

        res.status(200).end()
        
    });
});



module.exports = router;