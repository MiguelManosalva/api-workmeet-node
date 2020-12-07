const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
const Usuario = require("./user");


const tareaSchema = new mongoose.Schema(
    {
        asunto: {
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
        fechaInicio: {
            type: Date,
            default: new Date(),
            required: true
        },
        fechaAlerta: {
            type: Date,
            default: new Date()
        },
        fechaVencimiento: {
            type: Date,
            default: new Date(),
            required: true
        },
        temas: {
            type: String,
            trim: true,
            required: true
        },
        participantes: [Usuario],
        reunion: {
            type: ObjectId,
            ref: "Reunion",
        },

    },
    { timestamps: true }
);

module.exports = mongoose.model("Tarea", tareaSchema);


