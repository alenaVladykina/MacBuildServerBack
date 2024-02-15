const db = require("./../db");


module.exports = {
  async find(userId) {
    const tasks = await db.taskHistory.findAsync({ userId });
    return tasks;
  },

  async insert(data, userId, taskId) {
    const newTask = db.taskHistory.insertAsync({
      create:  Date.now(),
      update:  Date.now(),
      deadline: data.deadline,
      title: data.title,
      status: data.status,
      description: data.description,
      priority: data.priority,
      userId,
      taskId
    });

    return newTask
  }
};
