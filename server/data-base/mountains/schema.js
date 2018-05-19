const mongoose = require("../index");
const { COLLECTIONS } = require("../config");

const mountainsSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        height: {
            type: Number,
            required: true
        },
        system: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        },
        coordinates: {
            type: Object,
            required: true
        },
        create: {
            type: String,
            default() {
                return Date.now();
            }
        }
    },
    { versionKey: false }
);

module.exports = mongoose.model(COLLECTIONS.MOUNTAINS, mountainsSchema);
