const express = require('express');

const app = express();

app.route('/about/mission')
  .get((req, res) => {
    res.send('welcome to application home get');
  })
  .post((req, res) => {
    res.send('welcome to application home post');
  })
  .put((req, res) => {
    res.send('welcome to application home put');
  });

app.listen(3000, () => {
  console.log('listening on port 3000');
});