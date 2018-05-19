const express = require("express");
const bodyParser = require("body-parser");

const mountains = require("../../route-handler/mountains");
const router = express.Router();

router.use(bodyParser.json());

// GET ALL Name
router.get("/mountains-name", mountains.getAllMountainsName);
//GET ALL
router.get('/', mountains.getAllForUi)

module.exports = router;
