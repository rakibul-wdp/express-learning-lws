const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.get('/about', (req, res) => {
  res.format({
    'text/plain': () => {
      res.send('Hi');
    },
    'text/html': () => {
      res.render('pages/about', {
        name: 'Bangladesh'
      })
    },
    'application/json': () => {
      res.json({
        message: 'About'
      })
    },
    default: () => {
      res.status(406).send('Not acceptable');
    }
  })
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});