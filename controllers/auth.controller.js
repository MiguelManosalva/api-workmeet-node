const User = require("../models/user");
const jwt = require("jsonwebtoken"); // to generate signed token
const expressJwt = require("express-jwt"); // for authorization check
const { errorHandler } = require("../helpers/dbErrorHandler");

// middlewares rest
exports.signup = (req, res) => {
  const user = new User(req.body);
  user.save((err, user) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    user.salt = undefined;
    user.hashed_password = undefined;
    res.json({
      user
    });
  });
};

exports.signin = (req, res) => {
  // find the user based on email
  const { email, hashed_password } = req.body;

  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error:
          "El usuario con ese correo electrónico no existe. Por favor regístrese",
      });
    }

    // if user is found make sure the email and password match
    // create authenticate method in user model
    if (!user.authenticate(hashed_password)) {
        return res.status(401).json({
            error: "Email and password dont match"
        });
    }

    // generate a signed token with user id and secret
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    
    // persist the token as 't' in cookie with expire date
    res.cookie("t", token, { expire: new Date() + 9999 });
    
    // return response with user and token to frontend client
    const { _id, nombre, email, profile } = user;
    console.log("_id: ", _id);
    return res.json({ token, user: { _id, nombre, email, profile } });
  });
};

exports.signout = (req, res) => {
  res.clearCookie("t");
  res.json({ message: "Se ha cerrado sesión" });
};

exports.requireSignin = expressJwt({
  secret: process.env.JWT_SECRET,
  userProperty: "auth",
});

exports.isAuth = (req, res, next) => {
  console.log(req.params);
  let user = req.params && req.auth && req.params.userId == req.auth._id;
  if (!user) {
    return res.status(403).json({
      error: "Acceso denegado",
    });
  }
  next();
};

exports.isAdmin = (req, res, next) => {
  if (req.profile === 0) {
    return res.status(403).json({
      error: "¡Recursos de administración! Acceso denegado",
    });
  }
  next();
};

exports.isMaintainer = (req, res, next) => {
  if (req.profile === 1) {
    return res.status(403).json({
      error: "¡Recursos de mantenedor! Acceso denegado",
    });
  }
  next();
};
