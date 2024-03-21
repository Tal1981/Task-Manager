const express = require("express");
const taskRouter = express.Router();
const {
  getAllTasks,
  createTask,
  getOneTask,
  UpdateTask,
  deleteTask,
} = require("../controllers/tasks-ctrl.js");

taskRouter.route("/").get(getAllTasks).post(createTask);

taskRouter.route("/:id").get(getOneTask).patch(UpdateTask).delete(deleteTask);

module.exports = taskRouter;
