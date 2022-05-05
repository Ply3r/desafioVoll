const error = (err, req, res, next) => {
  console.log(err);
  const status = +err.status || 500;

  return res.status(status).json({ message: err.message });
}

module.exports = error;
