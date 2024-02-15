const db = require("./../db");

module.exports.taskRepositories = {
  async findTask(key, userId) {
    const task = await db.tasks.findOneAsync({ _id: key, userId })
    return task
  }
}
