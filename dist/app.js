"use strict";

var express = require("express");
var cors = require("cors");
var morgan = require("morgan");
var taskRouter = require("./routes/tasks-router.js");

// Initialize Express & CORS &  Morgan.
var app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({
  extended: true
}));
app.use(express["static"]("public"));
app.use(express["static"]("views"));
app.use("/", taskRouter);
module.exports = app;