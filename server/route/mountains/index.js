const express = require("express");
const bodyParser = require("body-parser");

const mountains = require("../../route-handler/mountains");
const router = express.Router();

router.use(bodyParser.json());
// SAVE
router.post("/", mountains.save);
// DELETE
router.delete("/:id", mountains.deleteOne);
// GET ALL
router.get("/", mountains.getAll);
// GET ONE
router.get("/:id", mountains.getOne);
// UPDATE
router.put("/:id", mountains.updateOne);

module.exports = router;
