const mongoose = require("mongoose");

// Define a schema for the User model
const UserSchema = new mongoose.Schema(
    {
        // Required fields
        username: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },

        // Optional fields
        profilePic: { type: String, default: "" },
        isAdmin: { type: Boolean, default: false },
    },
    {
        // Add timestamps to the schema
        timestamps:true
    }
);

// Create the User model using the schema
module.exports = mongoose.model("User", UserSchema);