const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true
        },
        surnames: {
            type: String,
            trim: true,
            required: true
        },
        password: {
            type: String,
            trim: true,
            required: true
        },
        birthdate: {
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
        banner: {
            type: String,
            default: ""
        },
        biography: {
            type: String,
            default: ""
        },
        location: {
            type: String,
            default: ""
        },
        website: {
            type: String,
            default: ""
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);


