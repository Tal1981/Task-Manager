"use strict";

var express = require("express");
var taskRouter = express.Router();
var _require = require("../controllers/tasks-ctrl.js"),
  getAllTasks = _require.getAllTasks,
  createTask = _require.createTask,
  getOneTask = _require.getOneTask,
  UpdateTask = _require.UpdateTask,
  deleteTask = _require.deleteTask;
taskRouter.route("/").get(getAllTasks).post(createTask);
taskRouter.route("/:id").get(getOneTask).patch(UpdateTask)["delete"](deleteTask);
module.exports = taskRouter;