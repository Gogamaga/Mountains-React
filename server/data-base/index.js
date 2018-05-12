const mongoose = require("mongoose");
const configDB = require("./config");
mongoose.connect(configDB.DATA_BASE, { autoReconnect: true });

module.exports = mongoose;
