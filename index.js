const express = require('express');

const app = express();

app.enable('case sensitive routing');
app.disable('case sensitive routing');

app.all('/about', (req, res) => {
  res.send('welcome to application home');
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});