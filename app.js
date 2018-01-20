const express = require('express');
const jwt = require('jsonwebtoken');

const port = 3000;
const app = express();

app.get('/', (req, res) => {
  res.json({
    message: 'Main page!'
  });
});

app.post('/login', (req, res) => {
  const user = {
    id: 1,
    username: 'NikolasMelui',
    email: 'slak@samaradom.ru'
  };
  jwt.sign({ user }, 'secretkey', (err, token) => {
    res.json({
      token
    });
  });
});

app.listen(port, () => global.console.log(`Server is listening on port: ${port}`));
