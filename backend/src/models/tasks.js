const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  name: {
    type: String,
    required: [true, "must provide a name"],
    trim: true,
    maxLength: [20, "name cannot be more than twenty characters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

//* Define a pre-save middleware to set the creation date
taskSchema.pre("save", function (next) {
  if (!this.isNew) {
    // Don't update the date if the document is not new
    return next();
  }
  this.date = new Date();
  next();
});

const Task = mongoose.model("Task", taskSchema, "task-collection");

module.exports = Task
