const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
const Tarea = require("./tarea").schema;
const Usuario = require("./user").schema;


const reunionSchema = new mongoose.Schema(
    {
        nombre: {
            type: String,
            trim: true,
            required: true,
            unique: true
        },
        asunto: {
            type: String,
            trim: true,
            required: true
        },
        temas: {
            type: String,
            trim: true,
            required: true
        },
        tareas: [Tarea],
        participantes: [Usuario],
        encargado: {
            type: ObjectId,
            ref: "User",
            required: true
        },
        tipoReunion: {
            type: ObjectId,
            ref: "TipoReunion",
            required: true
        },

    },
    { timestamps: true }
);

module.exports = mongoose.model("Reunion", reunionSchema);


