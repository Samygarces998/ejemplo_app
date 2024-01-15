const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const routes = require("./routes/index");

app.use(express.json());
app.use(express.urlencoded({extended: false}));
// app.use(bodyParser.json({limit: "50mb"}));
// app.use(bodyParser.urlencoded({limit: "50mb", extended: false}));

app.use("/", routes);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs"); 

app.use (express.static(path.join(__dirname, "public")));

mongoose.connect("mongodb://localhost/certificacion_app", { useNewUrlParser: true });

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
    console.log("Database connected successfully");
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});
