const express = require("express");
const bodyParser = require("body-parser");

const countries = require("../../route-handler/countries");
const router = express.Router();

router.use(bodyParser.json());
// SAVE
router.post("/", countries.save);
// DELETE
router.delete("/:id", countries.deleteOne);
// GET ALL
router.get("/", countries.getAll);
//GET FOR PAGE
router.post("/countries-for-page", countries.getCountriesSliced);
//GET COUNT
router.get("/count", countries.getCountCountries);
// GET ONE
router.get("/:id", countries.getOne);
// UPDATE
router.put("/:id", countries.updateOne);

module.exports = router;
