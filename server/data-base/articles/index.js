const Articles = require("./schema");

module.exports = {
    save({ name, mountain, views, discription, fotos, tags, create }) {
        const articles = new Articles({
            name,
            mountain,
            views,
            discription,
            fotos,
            tags,
            create
        });
        return articles.save();
    },
    getAll() {
        return Articles.find({});
    },
    getOne(id) {
        return Articles.findById(id);
    },
    updateOne(id, articles) {
        return Articles.findByIdAndUpdate(id, articles, { new: true });
    },
    removeFotoFromArticle(id, foto) {
        return Articles.findByIdAndRemove(id, { $pull: { fotos: foto } });
    },
    deleteOne(id) {
        return Articles.deleteOne({ _id: id });
    },
    // FOR UI
    findArticlesByMountainName(name, from, limit) {
        return Articles.find({ "mountain.name": name })
            .skip(from)
            .limit(limit);
    },
    getArticlesByMountainNameCount(name) {
        return Articles.find({ "mountain.name": name }).count();
    },
    incrementArticleViews(id) {
        return Articles.findByIdAndUpdate(id, { $inc: { views: 1 } }, { new: true });
    },
    getAllArticlesMountainsName() {
        return Articles.find().select("-tags -create -name -_id -fotos -views -discription");
    },
    searchArticleByDiscription(text, from, limit) {
        return Articles.find({ discription: new RegExp(text, "i") })
            .skip(from)
            .limit(limit);
    },
    getSearchArticlesByDiscriptionCount(text) {
        return Articles.find({ discription: new RegExp(text, "i") }).count();
    },
    getArticlesSliced(from, limit) {
        return Articles.find({})
            .skip(from)
            .limit(limit);
    },
    getArticlesCount() {
        return Articles.find({}).count();
    }
};
