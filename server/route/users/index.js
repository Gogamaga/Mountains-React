const express = require("express");
const bodyParser = require("body-parser");

const users = require("../../route-handler/users");
const router = express.Router();

router.use(bodyParser.json());

//SAVE
router.post("/admin/register", users.save);
router.post("/admin/login", users.login);

module.exports = router;
