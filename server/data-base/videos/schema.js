const mongoose = require("../index");
const { COLLECTIONS } = require("../config");

const videosSchema = mongoose.Schema(
    {
        mountainName: {
            type: String,
            required: true,
            unique: true
        },
        videos: {
            type: [String]
        }
    },
    { versionKey: false }
);

module.exports = mongoose.model(COLLECTIONS.VIDEOS, videosSchema);
