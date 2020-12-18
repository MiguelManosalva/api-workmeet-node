const Notificacion = require("../models/notificacion");

// middlewares rest
exports.notificacionById = (req, res, next, id) => {
    notificacion.findById(id).exec((err, notificacion) => {
        if (err || !notificacion) {
            return res.status(404).json({
                error: "Notificacion no encontrada!"
            });
        }
        req.notificacion = notificacion;
        next();
    });
};

exports.list = (req, res) => {
    Notificacion.find().exec((err, data) => {
        if (err) {
            return res.status.json({
                error: errorHandler(err)
            });
        }
        res.json(data);
    });
};

exports.create = (req, res) => {
    const notificacion = new Notificacion(req.body);
    notificacion.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json( { data });
    });
};

exports.update = (req, res) => {
    const notificacion = req.notificacion;
    
    notificacion.estado = req.body.estado;

    notificacion.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json(data);
    });
};
