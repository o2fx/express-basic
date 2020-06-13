const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Welcome to the test API');
});

app.get('/users', function (req, res) {
  res.json({
    id: 'uuid345"-ab3',
    name: 'toto'
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
