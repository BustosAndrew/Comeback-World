require('dotenv').config();
require('./config/database');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

// express config
const app = express();
const port = 5000;

// express middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// express routers
const userRouter = require('./routes/users');
const comebacksRouter = require('./routes/comebacks');
const threadRouter = require('./routes/threads');

app.use(cors());
app.use('/users', userRouter);
app.use('/comebacks', comebacksRouter);
app.use('./threads', threadRouter);

app.get('/', (req, res) => {
    res.send('hello world');
});

app.listen(port, () => {
    console.log(`express listening at http://localhost:${port}`);
});
