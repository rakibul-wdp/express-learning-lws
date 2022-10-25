const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.get('/test', (req, res) => {
  res.send('Hello');
})

app.get('/about', (req, res) => {
  res.set('Platform', 'Omok Tomok Amrai');
  console.log(res.get('Platform'));
  res.end();
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});