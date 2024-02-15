const { Router } = require("express");
const { users } = require("../data/data");
const { getHashedPassword } = require("../utils");
const jwt = require('jsonwebtoken');
const db = require("../db");

const loginRouter = Router({});

loginRouter.post('/', async (req, res) => {
    const { email, password } = req.body;
    const hashedPassword = getHashedPassword(password);
    const user = await db.users.findOneAsync({ email, password: hashedPassword });
    if (user === null) {
        return res.status(400).send({
            status: "error",
            errorText: "Invalid username or password"
        });
    }

    req.session.userId = user._id;
    res.status(200).send({
            email: user.email,
            userId: user._id,
            isLogin: true
    })
});

module.exports = loginRouter;
