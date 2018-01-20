const express = require('./node_modules/express');
const jwt = require('jsonwebtoken');

const port = 3000;
const app = express();

app.get('/api', (req, res) => {
  res.json({
    message: 'Hello there!'
  });
});

app.listen(port, () => global.console.log(`Server is listening on port: ${port}`));
