const Relation = require("../models/relations");

// middlewares rest
exports.userRelationById = (req, res, next, id) => {
    Relation.findById(id).exec((err, relation) => {
        if (err || !relation) {
            return res.status(404).json({
                error: "Relation doesn't exist"
            });
        }
        req.relation = relation;
        next();
    });
};
