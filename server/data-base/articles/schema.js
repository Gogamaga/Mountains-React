const mongoose = require("../index");

const { COLLECTIONS } = require("../config");

const articleSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        mountain: {
            type: Object
        },
        views: {
            type: Number,
            default: 0
        },
        discription: {
            type: String
        },
        fotos: {
            type: []
        },
        tags: {
            type: [String]
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

module.exports = mongoose.model(COLLECTIONS.ARTICLE, articleSchema);
