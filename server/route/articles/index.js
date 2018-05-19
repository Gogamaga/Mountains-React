const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const articles = require("../../route-handler/articles");
const middleWareForAuth = require("../../utils/middlewareForAuth");
const router = express.Router();
router.use(bodyParser.json());
router.use(cookieParser());
// router.use(middleWareForAuth());
router.use(bodyParser.json());

const midle = middleWareForAuth();

// SAVE
router.post("/", articles.save);
// GET ALL
router.get("/", articles.getAll);
// GET ONE
router.get("/:id", articles.getOne);
// UPDATE ONE
router.put("/:id", articles.updateOne);
// DELETE ONE
router.delete("/:id", articles.deleteOne);

module.exports = router;
