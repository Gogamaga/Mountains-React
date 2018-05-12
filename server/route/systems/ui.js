const express = require("express");
const bodyParser = require("body-parser");

const system = require("../../route-handler/system");

const router = express.Router();
router.use(bodyParser.json());

router.get("/", system.getAll);

module.exports = router;
