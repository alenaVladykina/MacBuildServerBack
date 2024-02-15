const { Router } = require("express");
const db = require("../db");
const { log } = require("console");


const userRouter = Router({});


userRouter.post('/', async (req, res) => {

    const userId = req.session.userId
    const user = await db.users.findOneAsync({ _id: userId })
    log(user)
    if (user) {
        res.status(200).send({
            isLogin: true,
            email: user.email,
            userId: user._id
        });
    } else {
        res.status(401).send({
            error: "user Unauthorized",
            status: "ok"
        });
    }
});

module.exports = userRouter;