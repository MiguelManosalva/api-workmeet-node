const mongoose = require("mongoose");
const {ObjectId } = mongoose.Schema;

const RelationSchema = new mongoose.Schema(
    {
        userId: {
            type: ObjectId,
            ref: "User",
            required: true
        },
        userRelationId: {
            type: ObjectId,
            ref: "User",
            required: true
        }
        
    },
    {timestamps:true}
);

 module.exports  = mongoose.model("Relation", RelationSchema);
