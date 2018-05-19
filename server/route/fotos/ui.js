const express = require("express");
const bodyParser = require("body-parser");

const fotos = require("../../route-handler/fotos");

const router = express.Router();
router.use(bodyParser.json());

router.get("/random_photo", fotos.getRandomPhoto);
router.get("/", fotos.getAll);
router.get("/mountain_name_list", fotos.getMountainsNameFotos);
router.get("/:id", fotos.getOneMountainFotos);

module.exports = router; 
