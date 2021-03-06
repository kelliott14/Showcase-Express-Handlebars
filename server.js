var express = require("express")

var PORT = process.env.PORT || 7000;
var app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public/assets"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function(){
    console.log("Server listing on http://localhost:" + PORT);
});

