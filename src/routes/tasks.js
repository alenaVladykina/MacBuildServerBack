const { Router } = require("express");
const { tasksRepositories } = require("../reppositories/tasks-reppositories");
const history = require("../reppositories/task-histoty-repositiories");
const { log } = require("console");


const tasksRouter = Router({});


tasksRouter.get('/', async (req, res) => {
  const userId = req.session.userId;

  let tasks = await tasksRepositories.findTasks(userId);

  const historyList = await history.find(userId);
  const historyGroupByTaskId = {};

  if (historyList.length) {
    historyList.forEach(element => {
      if (!historyGroupByTaskId[element.taskId]) {
        historyGroupByTaskId[element.taskId] = [];
      }

      historyGroupByTaskId[element.taskId].push(element);
    });
  }

  tasks = tasks.map((element) => {
    if (historyGroupByTaskId[element._id]) {
      return {
        ...element,
        children: historyGroupByTaskId[element._id]
      };
    }

    return element;
  });

  res.send(tasks);
})

tasksRouter.post('/', async (req, res) => {
  const newProduct = await tasksRepositories.createTask(req.body.task, req.session.userId)
  res.status(201).send(newProduct)
});

tasksRouter.delete('/', async (req, res) => {
  const taskResponse = await tasksRepositories.deleteTask(req.body.key, req.session.userId)
  if (taskResponse) {
    res.status(204).send(`Task Delete, position`)
  } else {
    res.status(404).send("Task no Delete")
  }
});

tasksRouter.put('/', async (req, res) => {
  const taskUpdate = await tasksRepositories.updateTask(req.body.task, req.session.userId)
  if (taskUpdate) {
    res.send({
      status: 'ok'
    });
  } else {
    res.send({
      status: 'error',
      errorText: "Task no Put"
    });
  }
});

module.exports = tasksRouter;