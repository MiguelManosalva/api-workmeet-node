const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const tweetSchema = new mongoose.Schema(
    {
        userId: {
            type: ObjectId,
            ref: "User",
            required: true
        },
        message: {
            type: String,
            trim: true,
            required: true
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Tweet", tweetSchema);