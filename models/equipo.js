const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
const Usuario = require("./user").schema;

const equipoSchema = new mongoose.Schema(
    {
        nombre: {
            type: String,
            trim: true,
            required: true,
            unique: true
        },
        descripcion: {
            type: String,
            trim: true,
            required: true
        },
        usuarios: [Usuario],
        encargado: {
            type: ObjectId,
            ref: "User",
            required: true
        },

    },
    { timestamps: true }
);

module.exports = mongoose.model("Equipo", equipoSchema);


