const express = require('express');
const jwt = require('jsonwebtoken');

const port = 3000;

let app = express();

app.get('/api', (req, res) => {
  res.json({
    message: 'Hello there!'
  });
});

app.listen(port, () => console.log(`Server is listening on port: ${port}`));
