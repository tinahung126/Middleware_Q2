// app.js
const express = require('express');
const app = express();
const port = 3000;
let originalUrl = '';
let logMethod = '';
let startTime = 0;

app.use(function (req, res, next) {
  originalUrl = req.originalUrl;
  logMethod = req.method;
  startTime = new Date();
  next();
});

app.get('/', (req, res, next) => {
  res.send('列出全部 Todo');
  next('route');
});

app.get('/new', (req, res, next) => {
  res.send('新增 Todo 頁面');
  next('route');
});

app.get('/:id', (req, res, next) => {
  res.send('顯示一筆 Todo');
  next('route');
});

app.post('/', (req, res, next) => {
  res.send('新增一筆  Todo');
  next('route');
});

app.use(function (req, res) {
  const endTime = new Date();
  const timeCount = (endTime - startTime).toLocaleString();
  startTime = startTime.toLocaleString();
  console.log(
    `${startTime} | ${logMethod} from ${originalUrl} | total time: ${timeCount} ms`
  );
});

app.listen(port, () => {
  console.log(`App running on port http://localhost:${port}`);
});
