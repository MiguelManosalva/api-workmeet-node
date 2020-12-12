const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const userSchema = new mongoose.Schema(
    {
        nombre: {
            type: String,
            trim: true,
            required: true
        },
        apellidos: {
            type: String,
            trim: true,
            required: true
        },
        clave: {
            type: String,
            trim: true,
            required: true
        },
        fechaNacimiento: {
            type: Date,
            default: new Date()
        },
        email: {
            type: String,
            trim: true,
            required: true,
            unique: true
        },
        avatar: {
            type: String,
            default: ""
        },
        biografia: {
            type: String,
            default: ""
        },
        area: {
            type: String,
            default: ""
        },
        team: {
            type: ObjectId,
            ref: "Equipo"
        },
        role: {
            type: Number,
            default: 0
        },
        historia: {
            type: Array,
            default: []
        },
        // notificaciones: [notificacionSchema]
    },
    { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);


