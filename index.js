const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.get('/about', (req, res) => {
  // res.send('About');
  // res.end();
  // res.json({
  //   name: 'Bangladesh'
  // })
  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});