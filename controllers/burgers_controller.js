var express = require("express");
var router = express.Router();

var burger = require("../models/burger");

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, red) {
    burger.addBurger(["burger_name"], [req.body.name], function(result) {
        res.json({id: result.insertID});
    });
});

router.put("/api/burgers/:id", function(req, res) {
    var condition = req.params.id;
    console.log("condition ", condition);

    burger.devourBurger(condition, function(result) {
        if (res.changedRows === 0) {
            return res.status(404).end()
        }

        res.status(200).end()
        
    });
});

module.exports = router;