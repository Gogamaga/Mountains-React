const Videos = require("./schema");

module.exports = {
    save({ mountainName, videos }) {
        const video = new Videos({ mountainName, videos });
        return video.save();
    },
    getAll() {
        return video.find({});
    },
    getOne(id) {
        return video.findById(id);
    }
};
