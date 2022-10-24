const handle = (req, res) => {
  console.log(req.get('content-type'));
  res.send('hello world');
};

module.exports = handle;