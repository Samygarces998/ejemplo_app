const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const persona = new Schema({
    names: {
        type: String,
        requered: true
    },
    email: {
        type: String,
        requered: true,
        unique: true
    },
    phone: {
        type: String,
        requered: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("persona", persona);