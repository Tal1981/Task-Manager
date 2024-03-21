"use strict";

var mongoose = require("mongoose");
var dotenv = require("dotenv");
dotenv.config();
var urlDB = process.env.URI;
mongoose.connect(urlDB).then(function () {
  return console.log("MongoDB is connected");
})["catch"](function (err) {
  return console.error("Error connecting to MongoDB\n", err);
});