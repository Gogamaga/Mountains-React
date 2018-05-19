const Mountains = require("./schema");

module.exports = {
    save({ name, height, country, system, coordinates }) {
        const mountain = new Mountains({ name, height, country, system, coordinates });
        return mountain.save();
    },
    getAll() {
        return Mountains.find({});
    },
    getOne(id) {
        return Mountains.findById(id);
    },
    updateOne(id, mountain) {
        console.log(mountain);
        return Mountains.findByIdAndUpdate(id, mountain, { new: true });
    },
    deleteOne(id) {
        return Mountains.deleteOne({ _id: id });
    },
    getAllMountainsName() {
        return Mountains.find().select("-create -height -country -system -coordinates");
    }
};
