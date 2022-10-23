const express = require('express');

const app = express();

app.enable('case sensitive routing');
app.disable('case sensitive routing');

app.param('id', (req, res, next, id) => {
  const user = {
    userId: id,
    name: 'Omok',
  };
  req.userDetails = user;
  next();
})

app.get('/user/:id', (req, res) => {
  console.log(req.userDetails);
  res.send('welcome to application home');
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});