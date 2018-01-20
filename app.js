import { log } from 'util';

const express = require('express');
const jwt = require('jsonwebtoken');

const port = 3000;
const app = express();

app.get('/', (req, res) => {
  res.json({
    message: 'Main page!'
  });
});

app.post('/login', verifyToken, (req, res) => {
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

function verifyToken(req, res, next) {
  const bearerHeader = req.headers.authorization;
  if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];
    next();
  } else {
    res.sendStatus(403);
  }
}

app.listen(port, () => global.console.log(`Server is listening on port: ${port}`));
