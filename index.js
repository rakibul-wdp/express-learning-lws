const express = require('express');
const app = express();

app.get('/', (req, res) => {
  for(let i = 0; i <= 10; i++) {
    if (i === 5) {
      next('there was an error');
    } else {
      res.write('a');
    }
  }
  res.end();
});

app.get('/', (req, res) => {
  res.send(a);
});

// 404 error handler
app.use((req, res, next) => {
  res.send('Requested url was not found...!!!');
});

app.use((err, req, res, next) => {
  if (res.headersSent) {
    next('There wan a problem');
  } else {
    if (err.message) {
      res.status(500).send(err.message);
    } else {
      res.status(500).send('There was an error...!!!');
    }
  }
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});