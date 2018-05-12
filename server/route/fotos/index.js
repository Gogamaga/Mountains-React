const express = require("express");
const fileupload = require("express-fileupload");
const bodyParser = require("body-parser");
const fotos = require("../../route-handler/fotos");

const router = express.Router();

router.use(bodyParser.json());
// router.use(fileupload());
// SAVE
router.post("/", fotos.save);
// GET ALL
router.get("/", fotos.getAll);
router.get("/:id", fotos.getOne);

module.exports = router;
