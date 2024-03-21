const Task = require("../models/tasks.js");

//*====================  getAllTasks  ===========================//

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();

    res.status(200).json({
      tasks,
    });
  } catch (err) {
    return res.status(500).json({ msg: "Internal Server Error\n", err });
  }
};

//*====================  createTask  ===========================//

const createTask = async (req, res) => {
  const newTask = req.body;
  try {
    const task = await Task.create(newTask);

    res.status(200).json({
      task,
    });
  } catch (err) {
    res.status(500).json({ msg: "Internal Server Error\n", err });
  }
};

//*====================  getOneTask  ===========================//

const getOneTask = async (req, res) => {
  const id = req.params.id;
  try {
    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).json({ msg: "This task does not exist" });
    }
    res.status(201).json({ task });
  } catch (err) {
    return res.status(500).json({ msg: "Internal Server Error\n", err });
  }
};

//*====================  UpdateTask  ===========================//

const UpdateTask = async (req, res) => {
  const id = req.params.id;
  const { name, completed } = req.body;

  try {
    const task = await Task.findByIdAndUpdate(
      { _id: id },
      { name, completed },
      {
        new: true,
        runValidators: true,
      },
    );

    if (!task) {
      return res.status(404).json({ msg: "This task does not exist" });
    }

    res.status(200).json({ task });
  } catch (err) {
    return res.status(500).json({ msg: "Internal Server Error\n", err });
  }
};

//*====================  deleteTask  ===========================//

const deleteTask = async (req, res) => {
  const id = req.params.id;

  try {
    const task = await Task.findByIdAndDelete(id);

    if (!task) {
      return res.status(404).json({ msg: "This task does not exist" });
    }

    res.sendStatus(200);
  } catch (err) {
    return res.status(500).json({ msg: "Internal Server Error\n", err });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getOneTask,
  UpdateTask,
  deleteTask
};
