const System = require("./schema");

module.exports = {
    save({ name }) {
        const system = new System({ name });
        return system.save();
    },
    getAll() {
        return System.find({});
    },
    getOne(id) {
        return System.findById(id);
    },
    updateOne(id, { name }) {
        return System.findByIdAndUpdate(id, { name }, { new: true });
    },
    deleteOne(id) {
        return System.deleteOne({ _id: id });
    }
};
