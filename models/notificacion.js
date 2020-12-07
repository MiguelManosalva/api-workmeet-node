const mongoose = require("mongoose");

const notificacionSchema = new mongoose.Schema(
    {
        tipoNotificacion: {
            type: String,
            trim: true,
            required: true,
            unique: true
        },
        descripcionNotificacion: {
            type: String,
            trim: true,
            required: true,
            unique: true
        }

    },
    { timestamps: true }
);

module.exports = mongoose.model("Notificacion", notificacionSchema);


