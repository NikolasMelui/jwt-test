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

app.post('/post', (req, res) => {
  res.json({
    message: 'Post created'
  });
});

app.post('/login', verifyToken, (req, res) => {
  const user = {
    id: 1,
    username: 'nikolasmelui',
    password: 'password'
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
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403);
  }
}

app.listen(port, () => global.console.log(`Server is listening on port: ${port}`));
