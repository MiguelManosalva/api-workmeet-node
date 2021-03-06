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
        fecha:{
            type: Date,
            default: new Date(),
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
        },
        tipoReunion: {
            type: ObjectId,
            ref: "TipoReunion",
        },

    },
    { timestamps: true }
);

module.exports = mongoose.model("Reunion", reunionSchema);


