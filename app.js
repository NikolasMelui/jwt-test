const express = require('express');
const jwt = require('./node_modules/jsonwebtoken');

const port = 3000;
const app = express();

function verifyToken(req, res, next) {
  const bearerHeader = req.headers.authorization;
  if (typeof bearerHeader !== 'undefined') {
    req.token = bearerHeader;
    next();
  } else {
    res.sendStatus(403);
  }
}

app.get('/', (req, res) => {
  res.json({
    message: 'Main page!'
  });
});

app.post('/login', (req, res) => {
  const user = {
    id: 1,
    username: 'nikolasmelui',
    email: 'slak@samaradom.ru'
  };

  jwt.sign({ user }, 'secretkey', { expiresIn: '1h' }, (err, token) => {
    res.json({
      token
    });
  });
});

app.post('/posts', verifyToken, (req, res) => {
  jwt.verify(req.token, 'secretkey', (err, authData) => {
    if (err) {
      res.json({
        msg: req.token
      });
      res.sendStatus(403);
    } else {
      res.json({
        message: 'Post created',
        authData
      });
    }
  });
});

app.listen(port, () => global.console.log(`Server is listening on port: ${port}`));
