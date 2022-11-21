const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const postRouter = require('./routes/postRouter');
const categoryRouter = require('./routes/categoryRouter');

const app = express();

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());

app.use('/post', postRouter);
app.use('/category', categoryRouter);

module.exports = app;