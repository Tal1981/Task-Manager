"use strict";

require("./config/db.js");
var app = require("./app.js");
var dotenv = require("dotenv");
var port = process.env.PORT || 8000;
app.listen(port, function () {
  console.log("task manager app is listning on port ".concat(port));
});