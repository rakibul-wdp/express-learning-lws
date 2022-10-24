const express = require('express');

const app = express();
app.use(express.json());

const adminRoute = express.Router();

adminRoute.get('/dashboard', (req, res) => {
  console.log(req.query);
  res.send('We are in Admin Dashboard');
});

app.use('/admin', adminRoute);

app.get('/user/:id', (req, res) => {
  console.log(req.query);
  res.send('Hello world');
});

app.post('/user', (req, res) => {
  console.log(req.body);
  res.send('Hello world post');
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});

/**
 * req.baseUrl
 * req.originalUrl
 * req.path
 * req.hostname
 * req.ip
 * req.method
 * req.protocol
 * req.params
 * req.query
 * req.body
 * req.cookies
 * req.signedCookies
 * req.secure
 */