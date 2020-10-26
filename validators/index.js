exports.userSignupValidator = (req, res, next) => {
  req.check("name", "Name is required").notEmpty();
  req.check("surnames", "Surname is required").notEmpty();
  req
    .check("email", "Email must be between 3 to 32 characters")
    .matches(/.+\@.+\..+/)
    .withMessage("Email must containt @")
    .isLength({
      min: 4,
      max: 32,
    });

  const errors = req.validationErrors();

  if (errors) {
    const firstError = errors.map((error) => error.msg)[0];
    return res.status(400).json({ error: firstError });
  }

  next();
};

exports.userLoginValidator = (req, res, next) => {
  req
    .check("email", "Email must be between 3 to 32 characters")
    .matches(/.+\@.+\..+/)
    .withMessage("Email must containt @")
    .isLength({
      min: 4,
      max: 32,
    });
  req.check("password", "Password is required").notEmpty();

  const errors = req.validationErrors();

  if (errors) {
    const firstError = errors.map((error) => error.msg)[0];
    return res.status(400).json({ error: firstError });
  }

  next();
};

exports.tweetMessage = (req, res, next) => {
  req.check("message", "Message is required").notEmpty();

  const errors = req.validationErrors();

  if (errors) {
    const firstError = errors.map((error) => error.msg)[0];
    return res.status(400).json({ error: firstError });
  }

  next();
};
