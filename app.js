// app.js
const express = require('express');
const app = express();
const port = 3000;
let originalUrl = '';
let logMethod = '';
let startTime = 0;
let endTime = 0;

function logProcess(req, res, next) {
  originalUrl = req.originalUrl;
  logMethod = req.method;
  startTime = new Date();
  next();
}

function endPoint(req, res, next) {
  endTime = new Date();
  timeCount = (endTime - startTime).toLocaleString();
  startTime = startTime.toLocaleString();
  console.log(
    `${startTime} | ${logMethod} from ${originalUrl} | total time: ${timeCount} ms`
  );
}

app.get(
  '/',
  logProcess,
  (req, res, next) => {
    res.send('列出全部 Todo');
    next();
  },
  endPoint
);

app.get(
  '/new',
  logProcess,
  (req, res, next) => {
    res.send('新增 Todo 頁面');
    next();
  },
  endPoint
);

app.get(
  '/:id',
  logProcess,
  (req, res, next) => {
    res.send('顯示一筆 Todo');
    next();
  },
  endPoint
);

app.post(
  '/',
  logProcess,
  (req, res, next) => {
    res.send('新增一筆  Todo');
    next();
  },
  endPoint
);

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
