const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const api = require('./config/api'); // 引入api.js

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (request, response, next) {
  console.log(`before:request.url ==> ${request.url}`)
  if (request.url && !request.url.startsWith('/api')) { // 如果请求url不以“/api”开头，则自动补上
    request.url = '/api' + request.url;
  }
  console.log(`after:request.url ==> ${request.url}`)
  next();
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

/** 配置请求 */
app.get('/api/*', api.get);
app.post('/api/*', api.post);
app.options('/api/*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  res.sendStatus(200); // 让options请求快速返回
});

module.exports = app;
