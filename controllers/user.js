const User = require("../models/user");
const { Order } = require("../models/order");
const { errorHandler } = require("../helpers/dbErrorHandler");

// MIDDLEWARES
exports.userById = (req, res, next, id) => {
    User.findById(id).exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: "User not found"
            });
        }
        req.profile = user;
        next();
    });
};

exports.read = (req, res) => {
    req.profile.hashed_password = undefined;
    req.profile.salt = undefined;
    return res.json(req.profile);
};

exports.update = (req, res) => {
    User.findOneAndUpdate(
        { _id: req.profile._id },
        { $set: req.body },
        { new: true },
        (err, user) => {
            if (err) {
                return res.status(400).json({
                    error: "You are not authorized to perform this action"
                });
            }
            user.hashed_password = undefined;
            user.salt = undefined;
            res.json(user);
        }
    );
};

exports.addUserHistory = (req, res, next) => {
    let historia = [];

    req.body.order.products.forEach(item => {
        historia.push({
            _id: item._id,
            modulo: item.modulo,
            descripcion: item.descripcion,
            fechaCrea: item.fechaCrea
        });
    });

    User.findOneAndUpdate(
        { _id: req.profile._id },
        { $push: { historia } },
        { new: true },
        (error, data) => {
            if (error) {
                return res.status(400).json({
                    error: "Could not update user history"
                });
            }
            next();
        }
    );
};

exports.userHistory = (req, res) => {
    Order.find({ user: req.profile._id })
        .populate("user", "_id nombre")
        .sort("-created")
        .exec((err, historias) => {
            if (err) {
                return res.status(400).json({
                    error: errorHandler(err)
                });
            }
            res.json(historias);
        });
};
