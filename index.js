const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.get('/about', (req, res) => {
  res.cookie('name', 'omoktomokamrai');
  res.end();
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});