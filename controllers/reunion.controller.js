const Reunion = require("../models/reunion");
const TipoReunion = require("../models/tipoReunion");

// middlewares rest
exports.reunionById = (req, res, next, id) => {
    Reunion.findById(id).exec((err, reunion) => {
        if (err || !reunion) {
            return res.status(404).json({
                error: "No se pudo obtener reunion"
            });
        }
        req.reunion = reunion;
        next();
    });
};

exports.tipoReunionById = (req, res, next, id) => {
    TipoReunion.findById(id).exec((err, tipoReunion) => {
        if (err || !tipoReunion) {
            return res.status(404).json({
                error: "No se pudo obtener tipoReunion"
            });
        }
        req.tipoReunion = tipoReunion;
        next();
    });
};

exports.create = (req, res) => {
    const reunion = new Reunion(req.body);
    reunion.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json( { data });
    });
};

exports.createTipo = (req, res) => {
    const tipo = new TipoReunion(req.body);
    tipo.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json( { data });
    });
};

exports.read = (req, res) => {
    return res.json(req.reuniones);
};

exports.list = (req, res) => {
    Reunion.find().exec((err, data) => {
        if (err) {
            return res.status.json({
                error: errorHandler(err)
            });
        }
        res.json(data);
    });
};

exports.listTipo = (req, res) => {
    TipoReunion.find().exec((err, data) => {
        if (err) {
            return res.status.json({
                error: errorHandler(err)
            });
        }
        res.json(data);
    });
};

exports.update = (req, res) => {
    const reunion = req.reunion;
    
    reunion.nombre = req.body.nombre;
    reunion.asunto = req.body.asunto;
    reunion.temas = req.body.temas;
    reunion.fecha = req.body.fecha;
    reunion.encargado = req.body.encargado;
    reunion.participantes = req.body.participantes;
    reunion.tipoReunion = req.body.tipoReunion;

    reunion.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json(data);
    });
};

exports.updateTipo = (req, res) => {
    const tipo = req.tipoReunion;
    
    tipo.glosa = req.body.glosa;
    tipo.descripcion = req.body.descripcion;

    tipo.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json(data);
    });
};

exports.remove = (req, res) => {
    const reunion = req.reunion;
    reunion.remove((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json({
            message: "Reunion eliminada"
        });
    });
};

exports.removeTipo = (req, res) => {
    const reunion = req.reunion;
    reunion.remove((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json({
            message: "Reunion eliminada"
        });
    });
};
