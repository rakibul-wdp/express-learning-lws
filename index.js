const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.get('/about', (req, res) => {
  res.render('pages/about', {
    name: 'Bangladesh'
  });
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});