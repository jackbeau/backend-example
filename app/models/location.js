const mongoose = require('mongoose');
const { Schema } = mongoose;

const LocationSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String
    },
    assets: [{
        type: Schema.Types.ObjectId,
        ref: "Asset"
    }]
},
{
    timestamps: true
});

module.exports = mongoose.model("Location", LocationSchema);