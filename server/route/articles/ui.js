const express = require("express");
const bodyParser = require("body-parser");

const articles = require("../../route-handler/articles");

const router = express.Router();
router.use(bodyParser.json());

router.get("/", articles.getNewestArticles);
router.get("/mostviewed", articles.getMostViewedArticles);
router.get("/articles-mountains-name", articles.getAllArticlesMountainsName);
router.get("/article-by-discription/search", articles.searchArticleByDiscription);
router.get("/:id", articles.getOneArticle);
router.get("/articlebymontainname/:name", articles.getArticleByMountainName);

module.exports = router;
