const mongoose = require("mongoose");

// Define a schema for the Movie model
const MovieSchema = new mongoose.Schema(
    {
        title: { type: String, required: true, unique: true },
        description: { type: String },
        img: { type: String },
        imgTitle: { type: String },
        imgSmall: { type: String},
        trailer: { type: String },
        video: { type: String },
        year: { type: String },
        limit: { type: String },
        genre: { type: String },
        isSeries: { type: Boolean, default: false },

    },
    {
        timestamps:true
    }
);

// Create the Movie model using the schema
module.exports = mongoose.model("Movie", MovieSchema);