const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const systems = require("../../route-handler/system");
const router = express.Router();

router.use(bodyParser.json());
router.use(cookieParser());

// SAVE
router.post("/", systems.save);
// DELETE
router.delete("/:id", systems.deleteOne);
// GET ALL
router.get("/", systems.getAll);
// GET ONE
router.get("/:id", systems.getOne);
// UPDATE
router.put("/:id", systems.updateOne);

module.exports = router;
