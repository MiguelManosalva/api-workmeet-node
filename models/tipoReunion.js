const mongoose = require("mongoose");

const tipoReunionSchema = new mongoose.Schema(
    {
        glosa: {
            type: String,
            trim: true,
            required: true,
            unique: true
        },
        descripcion: {
            type: String,
            trim: true,
            required: true
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("TipoReunion", tipoReunionSchema);


