const mongoose = require('mongoose');
const { Schema } = mongoose;

const AssetSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    id: {
        required: true,
        type: Number
    },
    location: {
        type: Schema.Types.ObjectId,
        ref:"Location"
    }
});

module.exports = mongoose.model("Asset", AssetSchema);