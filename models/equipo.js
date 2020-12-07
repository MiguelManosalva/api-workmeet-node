const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
const Usuario = require("./user");

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
        avatar: {
            type: String,
            default: ""
        },
        participantes: [Usuario],
        admin: {
            type: ObjectId,
            ref: "User",
            required: true
        },

    },
    { timestamps: true }
);

module.exports = mongoose.model("Equipo", equipoSchema);


