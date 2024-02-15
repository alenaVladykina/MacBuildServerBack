const {Router} = require("express");
const { getHashedPassword } = require("../utils");
const db = require("../db");


const registerRouter = Router({});

registerRouter.post('/', async (req, res) => {
    const { email, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
        return res.send({
            status: "error",
            errorText: "password and confirmPassword no valid"
        });
    }

    const user = await db.users.findAsync({ email });

    if (user.length > 0) {
        return res.status(404).send({
            status: "error",
            errorText: "this user already exists"
        });
    }

    const hashedPassword = getHashedPassword(password);
    const newUser = await db.users.insertAsync({
        email,
        password: hashedPassword,
    });

    res.send({
        status: "ok"
    });
});

module.exports = registerRouter;
