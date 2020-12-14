const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
const Usuario = require("./user");


const tareaSchema = new mongoose.Schema(
    {
        asunto: {
            type: String,
            trim: true,
            required: [true, 'El asunto es obligatorio'],
            unique: true
        },
        descripcion: {
            type: String,
            trim: true,
            required: [true, 'La descripción es obligatoria']
        },
        fechaInicio: {
            type: Date,
            default: new Date(),
            //required: [true, 'Fecha de inicio es obligatoria']
        },
        fechaAlerta: {
            type: Date,
            default: new Date()
        },
        fechaVencimiento: {
            type: Date,
            default: new Date(),
            required: [true, 'Fecha de vencimiento es obligatoria']
        },
        temas: {
            type: String,
            trim: true
        },
        //participantes: [Usuario],
        // reunion: {
        //     type: ObjectId,
        //     ref: "Reunion",
        // },

    },
    { timestamps: true }
);

module.exports = mongoose.model("Tarea", tareaSchema);


