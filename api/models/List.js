const mongoose = require("mongoose");

// Define a schema for the List model
const ListSchema = new mongoose.Schema(
    {
        title: { type: String, required: true, unique: true },
        type: { type: String },
        genre: { type: String },
        content: { type:Array },
    },
    {
        timestamps:true
    }
);

// Create the List model using the schema
module.exports = mongoose.model("List", ListSchema);