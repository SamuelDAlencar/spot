const { loginSchema } = require('../utils/joiSchemas');

module.exports = (req, res, next) => {
  const { error } = loginSchema.validate(req.body);

  if (error) return res.status(400).json({
    message: error.message
  });

  next();
};
