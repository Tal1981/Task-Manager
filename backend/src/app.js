const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const taskRouter = require("./routes/tasks-router.js");

// Initialize Express & CORS &  Morgan.
const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.static("views"));

app.use("/", taskRouter);

module.exports = app;
