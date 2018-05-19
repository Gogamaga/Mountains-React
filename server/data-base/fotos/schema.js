const mongoose = require("../index");
const { COLLECTIONS } = require("../config");

const fotosSchema = mongoose.Schema(
    {
        mountainName: {
            type: Object,
            required: true,
            unique: true
        },
        fotos: {
            type: []
        }
    },
    { versionKey: false }
);

module.exports = mongoose.model(COLLECTIONS.FOTOS, fotosSchema);
