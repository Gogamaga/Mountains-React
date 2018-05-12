const mongoose = require("../index");

const { COLLECTIONS } = require("../config");

const usersSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        password: {
            type: String
        },
        expireDate: {
            type: Number,
            default: null
        },
        key: {
            type: String,
            default: ""
        },
        create: {
            type: String,
            default: Date.now()
        }
    },
    { versionKey: false }
);

module.exports = mongoose.model(COLLECTIONS.USERS, usersSchema);
