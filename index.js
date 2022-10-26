const express = require('express');
const multer = require('multer');

// File upload folder
const UPLOADS_FOLDER = './uploads/';

// prepare the final multer upload object
var upload = multer({
  dest: UPLOADS_FOLDER
})

const app = express();

// application route
app.post('/', upload.fields([
  {name: 'avatar', maxCount: 1},
  {name: 'gallery', maxCount: 2},
]), (req, res) => {
  res.send('Hello world');
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});