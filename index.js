const express = require('express');
const handle = require('./handle');

const app = express();
app.use(express.json());

const adminRoute = express.Router();

adminRoute.get('/dashboard', (req, res) => {
  console.log(req.secure);
  res.send('We are in Admin Dashboard');
});

app.use('/admin', adminRoute);

app.get('/user/:id', handle);

app.post('/user', (req, res) => {
  console.log(req.route);
  res.send('Hello world post');
});

app.get('/user', (req, res) => {
  console.log(req.route);
  res.send('Hello world get');
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