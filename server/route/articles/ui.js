const express = require("express");
const bodyParser = require("body-parser");

const articles = require("../../route-handler/articles");

const router = express.Router();
router.use(bodyParser.json());

router.get("/", articles.getNewestArticles);
router.get("/count", articles.getArticlesCount);
router.post("/get-limit", articles.getArticlesSliced);
router.get("/mostviewed", articles.getMostViewedArticles);
router.get("/articles-mountains-name", articles.getAllArticlesMountainsName);
router.post("/article-by-discription/search", articles.searchArticleByDiscription);
router.post("/article-by-montain-name/", articles.getArticleByMountainName);
router.get("/:id", articles.getOneArticle);

module.exports = router;
