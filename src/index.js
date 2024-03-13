const express = require("express");
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const cookieParser = require('cookie-parser');
const { log } = require("console");

const registerRouter = require("./routes/register");
const loginRouter = require("./routes/login");
const userRouter = require("./routes/user");

const app = express();
const port = process.env.PORT || 3001;

const bodyParser = require('body-parser');
const parserMiddleware = bodyParser.json();
app.use(parserMiddleware);
app.use(require('cors')());

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 6000000 },
    store: new FileStore(),
}));

app.use(cookieParser());

app.use('/register', registerRouter);
app.use('/login', loginRouter);


app.use((req, res, next) => {
    log(req.session.userId)
    if (req.session.userId) {
        return next();
    }
    res.send({
        status: "error",
        errorText: "Please login to continue"
    });
});

app.use('/user', userRouter);



app.listen(port);







