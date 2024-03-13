const { Router } = require("express");
const db = require("../db");


const userRouter = Router({});


userRouter.post('/', async (req, res) => {
    const userId = req.session.userId
    const user = await db.users.findOneAsync({ _id: userId })
    if (user) {
        res.status(200).send({
            isLogin: true,
            email: user.email,
            userId: user._id
        });
    } else {
        res.status(401).send({
            error: "User Unauthorized",
            status: "error"
        });
    }
});

module.exports = userRouter;