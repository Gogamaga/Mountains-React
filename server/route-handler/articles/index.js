const articles = require("../../data-base/articles");
const fotos = require("../../data-base/fotos");
const mountains = require("../../data-base/mountains");
const config = require("../../data-base/config");

const router = {
    save(req, res) {
        const article = req.body;

        articles
            .save(article)
            .then(result => {
                const { mountain, fotos: foto } = result;
                fotos.verifyOnUniqueNameAndSave(mountain, foto).then(result => console.log(result));
                res.send(result);
            })
            .catch(err => console.log(err));
    },
    getAll(req, res) {
        articles
            .getAll()
            .then(result => {
                res.send(result);
            })
            .catch(err => console.log(err));
    },
    getOne(req, res) {
        const id = req.params.id;
        articles
            .getOne(id)
            .then(result => res.send(result))
            .catch(err => console.log(err));
    },
    updateOne(req, res) {
        const id = req.params.id;
        const article = req.body;
        articles
            .updateOne(id, article)
            .then(result => res.send(result))
            .catch(err => console.log(err));
    },
    deleteOne(req, res) {
        const id = req.params.id;
        articles
            .deleteOne(id)
            .then(result => res.send(result))
            .catch(err => console.log(err));
    },
    // FOR UI
    getNewestArticles(req, res) {
        articles
            .getAll()
            .then(result => {
                const newestArticles = result.reverse().slice(0, 5);
                res.send(newestArticles);
            })
            .catch(err => console.log(err));
    },
    getMostViewedArticles(req, res) {
        articles.getAll().then(result => {
            const mostViewed = result.sort((a, b) => b.views - a.views).slice(0, 5);
            res.send(mostViewed);
        });
    },
    getOneArticle(req, res) {
        const id = req.params.id;
        articles.getOne(id).then(result => {
            articles.incrementArticleViews(result._id).then();
            const mountainId = result.mountain.id;
            mountains.getOne(mountainId).then(mountain => {
                const article = Object.assign(result, { mountain });
                res.send(article);
            });
        });
    },
    getArticleByMountainName(req, res) {
        const { mountain } = req.query;
        const { from, limit } = req.body;
        articles.getArticlesByMountainNameCount(mountain).then(count => {
            articles.findArticlesByMountainName(mountain, from, limit).then(result => {
                res.send({ articles: result, count });
            });
        });
    },
    getAllArticlesMountainsName(req, res) {
        articles.getAllArticlesMountainsName().then(result => res.send(result));
    },
    searchArticleByDiscription(req, res) {
        const text = req.query.search;
        const { from, limit } = req.body;
        articles.getSearchArticlesByDiscriptionCount(text).then(count => {
            articles
                .searchArticleByDiscription(text, from, limit)
                .then(result => res.send({ result, count }));
        });
    },
    getArticlesSliced(req, res) {
        const { from, limit } = req.body;
        console.log(from, limit);
        articles.getArticlesCount().then(count => {
            articles.getArticlesSliced(from, limit).then(articles => res.send({articles, count}));
        })
        
    },
    getArticlesCount(req, res) {
        articles.getArticlesCount().then(result => res.send(result.toString()));
    }
};

module.exports = router;
