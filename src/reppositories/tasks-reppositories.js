const db = require("./../db");
const histoty = require("./task-histoty-repositiories");

module.exports.tasksRepositories = {

  async findTasks(userId) {
    const tasks = await db.tasks.findAsync({ userId }).sort({ update: -1 });
    return tasks;
  },

  async createTask(task, userId) {

    const newTask = db.tasks.insertAsync({
      create: Date.now(),
      update: Date.now(),
      deadline: task.deadline,
      title: task.title ? task.title : 'New Title',
      status: task.status,
      description: task.description,
      priority: task.priority,
      userId
    });

    return newTask
  },

  async deleteTask(key, userId) {
    const numRemoved = await db.tasks.removeAsync({ _id: key, userId }, {})
    return numRemoved === 1
  },

  async updateTask(task, userId) {
    const data = {
      update: Date.now(),
      deadline: task.deadline,
      title: task.title,
      status: task.status,
      description: task.description,
      priority: task.priority,
    };

    const res = await db.tasks.updateAsync(
      { userId, _id: task.key },
      { $set: data },
      { multi: false }
    );

    await histoty.insert(data, userId, task.key);

    return res.numAffected === 1;
  }
};

