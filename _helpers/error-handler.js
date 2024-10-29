// helpers/error-handler.js
module.exports = function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).json({ message: err.message });
};
