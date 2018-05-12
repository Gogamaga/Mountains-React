const Countries = require("./schema");

module.exports = {
    save({ name }) {
        const countries = new Countries({ name });
        return countries.save();
    },
    getAll() {
        return Countries.find({});
    },
    getOne(id) {
        return Countries.findById(id);
    },
    updateOne(id, { name }) {
        return Countries.findByIdAndUpdate(id, { name: name }, { new: true });
    },
    deleteOne(id) {
        return Countries.deleteOne({ _id: id });
    },
    getCountCountries() {
        return Countries.find({}).count();
    },
    getCountriesSliced(from, to) {
        return Countries.find({})
            .skip(from)
            .limit(to);
    }
};
