// app.js
const express = require('express');
const app = express();
const port = 3000;

app.use(function (req, res, next) {
  const originalUrl = req.originalUrl;
  const logMethod = req.method;
  const startTime = new Date();
  next();
  const endTime = new Date();
  const timeCount = (endTime - startTime).toLocaleString();
  console.log(
    `${startTime.toLocaleString()} | ${logMethod} from ${originalUrl} | total time: ${timeCount} ms`
  );
});

app.get('/', (req, res) => {
  res.send('列出全部 Todo');
});

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面');
});

app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo');
});

app.post('/', (req, res) => {
  res.send('新增一筆  Todo');
});

app.listen(port, () => {
  console.log(`App running on port http://localhost:${port}`);
});
