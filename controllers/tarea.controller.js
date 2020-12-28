const Tarea = require("../models/tarea");
const { errorHandler } = require("../helpers/dbErrorHandler");

// middlewares rest
exports.tareaById = (req, res, next, id) => {
    Tarea.findById(id).exec((err, tarea) => {
        if (err || !tarea) {
            return res.status(404).json({
                error: "No se pudo obtener tarea"
            });
        }
        req.tarea = tarea;
        next();
    });
};

exports.create = (req, res) => {
    const tarea = new Tarea(req.body);
    tarea.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json( { data });
    });
};

exports.read = (req, res) => {
    console.log("req.tareas: ", req.tareas);
    return res.json(req.tareas);
};

exports.list = (req, res) => {
    Tarea.find().exec((err, data) => {
        if (err) {
            return res.status.json({
                error: errorHandler(err)
            });
        }
        res.json(data);
    });
};

exports.update = (req, res) => {
    const tarea = req.tarea;
    
    tarea.asunto = req.body.asunto;
    tarea.descripcion = req.body.descripcion;
    tarea.fechaAlerta = req.body.fechaAlerta;
    tarea.fechaVencimiento = req.body.fechaVencimiento;
    tarea.temas = req.body.temas;

    tarea.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json(data);
    });
};

exports.remove = (req, res) => {
    const tarea = req.tarea;
    tarea.remove((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json({
            message: "Tarea eliminada"
        });
    });
};
