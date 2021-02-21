require('dotenv').config();
require('./config/database');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// express config
const app = express();
const port = 3000;

// express middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// express routers
const userRouter = require('./routes/user');

app.use('/users', userRouter);

app.get('/', (req, res) => {
    res.send('hello world');
});

app.listen(port, () => {
    console.log(`express listening at http://localhost:${port}`);
});
