const express = require('express');
const fs = require('fs');
const app = express();

app.get('/', (req, res, next) => {
  fs.readFile('/file-does-not-exist', (err, data) => {
    if (err) {
      next(err);
    } else {
      res.send(data);
    }
  });
});

app.use((req, res, next) => {
  console.log('I am not called');
  next();
})

// custom error handling
app.use((err, req, res, next) => {
  if (res.headersSend) {
    next('There was a problem');
  } else {
    if (err.message) {
      res.status(500).send(err.message);
    } else {
      res.send('There wan an error');
    }
  }
})

app.listen(3000, () => {
  console.log('listening on port 3000');
});