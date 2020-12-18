const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
const Usuario = require("./user").schema;

const notificacionSchema = new mongoose.Schema(
    {
        tipo: {
            type: String,
            trim: true,
            required: true,
            unique: true
        },
        descripcion: {
            type: String,
            trim: true,
            required: true,
            unique: true
        },
        encargado: {
            type: ObjectId,
            ref: "User"
        },
        estado: {
            type: String
        },
        usuarios: [Usuario]

    },
    { timestamps: true }
);

module.exports = mongoose.model("Notificacion", notificacionSchema);


