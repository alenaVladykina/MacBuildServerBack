const { Router } = require("express");
const { taskRepositories } = require("../reppositories/task-repositiories");
const { log } = require("console");


const taskRouter = Router({});

taskRouter.get('/:id', async (req, res) => {
    const task = await taskRepositories.findTask(req.params.id, req.session.userId);
    if (task) {
        res.send(task);
    }

});

module.exports = taskRouter;
