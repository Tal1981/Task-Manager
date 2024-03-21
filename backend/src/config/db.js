const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const urlDB = process.env.URI;

mongoose
  .connect(urlDB)
  .then(() => console.log("MongoDB is connected"))
  .catch((err) => console.error("Error connecting to MongoDB\n", err));
