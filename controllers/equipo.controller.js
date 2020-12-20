const Equipo = require("../models/equipo");

// middlewares rest
exports.equipoById = (req, res, next, id) => {
    equipo.findById(id).exec((err, equipo) => {
        if (err || !equipo) {
            return res.status(404).json({
                error: "equipo no encontrado!"
            });
        }
        req.equipo = equipo;
        next();
    });
};

exports.read = (req, res) => {
    return res.json(req.equipo);
};

exports.list = (req, res) => {
    equipo.find().exec((err, data) => {
        if (err) {
            return res.status.json({
                error: errorHandler(err)
            });
        }
        res.json(data);
    });
};

exports.create = (req, res) => {
    const equipo = new equipo(req.body);
    equipo.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json( { data });
    });
};

exports.update = (req, res) => {
    const equipo = req.equipo;
    
    equipo.nombre = req.body.nombre;
    equipo.descripcion = req.body.descripcion;
    equipo.usuarios = req.body.usuarios;
    equipo.encargado = req.body.encargado;

    equipo.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json(data);
    });
};
