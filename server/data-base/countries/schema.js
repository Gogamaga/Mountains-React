const mongoose = require("../index");
const { COLLECTIONS } = require("../config");

const countriesSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
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

module.exports = mongoose.model(COLLECTIONS.COUNTRIES, countriesSchema);
