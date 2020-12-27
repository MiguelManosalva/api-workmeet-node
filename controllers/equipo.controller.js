const Equipo = require("../models/equipo");
const { errorHandler } = require("../helpers/dbErrorHandler");

// middlewares rest
exports.equipoById = (req, res, next, id) => {

    Equipo.findById(id).exec((err, equipo) => {
        if (err || !equipo) {
            return res.status(404).json({
                error: "equipo no encontrado!"
            });
        }

        console.log("equipo: ", equipo);

        req.equipo = equipo;
        next();
    });
};

exports.read = (req, res) => {
    return res.json(req.equipo);
};

exports.list = (req, res) => {
    Equipo.find().exec((err, data) => {
        if (err) {
            return res.status.json({
                error: errorHandler(err)
            });
        }
        res.json(data);
    });
};

exports.create = (req, res) => {
    const equipo = new Equipo(req.body);
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
