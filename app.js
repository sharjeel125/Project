const bodyParser = require("body-parser");
const { mongoose } = require("./db");

var Client = require("./routes/Client.routes");

const cors = require("cors");

var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const excelToJson = require("convert-excel-to-json");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const { gettingImage } = require("./Controllers/Client.controller");
const upload = require("./multer");
// app.use(express.static(path.join(__dirname + "./index.html")));

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, "public/dist/kyls")));

app.get("/", (req, res) => res.send("Hello Thats my Server"));
app.use("/client", Client);
app.post("/image", upload.single("cardimage"), gettingImage);

// app.use("*", express.static(path.join(__dirname, "public/dist/kyls")));
// app.use('/', express.static(path.join(__dirname, 'web/build')))

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});
// error handler

module.exports = app;
