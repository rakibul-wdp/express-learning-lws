const express = require('express');
const multer = require('multer');

// File upload folder
const UPLOADS_FOLDER = './uploads/';

// prepare the final multer upload object
var upload = multer({
  dest: UPLOADS_FOLDER,
  limits: {
    fileSize: 1000000, // 1MB
  },
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === 'image/png' ||
      file.mimetype === 'image/jpg' ||
      file.mimetype === 'image/jpeg'
    ) {
      cb(null, true);
    } else {
      cb(new Error('only .jpg, .png or .jpeg format allowed...!!!'));
    }
  },
})

const app = express();

// application route
app.post('/', upload.single('avatar'), (req, res) => {
  res.send('Hello world');
});

// default error handler
app.use((err, req, res, next) => {
  if (err) {
    if (err instanceof multer.MulterError) {
      res.status(500).send('There was an upload error');
    } else {
      res.status(500).send(err.message);
    }
  } else {
    res.send('success');
  }
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});