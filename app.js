const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public", "css")));
app.use(express.static(path.join(__dirname, "public", "js")));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "views")));

const homeRouter = require("./routes/homerouter.routes");
const taskRouter = require("./routes/taskie.routes");

app.get(homeRouter);
app.use(taskRouter);
console.log("it has started!");

app.listen(process.env.PORT || 1000);
