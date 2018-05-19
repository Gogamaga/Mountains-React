const countries = require("../../data-base/countries");

const router = {
    save(req, res) {
        const country = req.body;
        countries
            .save(country)
            .then(result => res.send(result))
            .catch(err => res.send(err));
    },
    getAll(req, res) {
        countries
            .getAll()
            .then(result => res.send(result))
            .catch(err => console.log(err));
    },
    getOne(req, res) {
        const id = req.params.id;
        countries
            .getOne(id)
            .then(result => res.send(result))
            .catch(err => console.log(err));
    },
    updateOne(req, res) {
        const id = req.params.id;
        const updateCountry = req.body;
        countries
            .updateOne(id, updateCountry)
            .then(result => res.send(result))
            .catch(err => console.log(err));
    },
    deleteOne(req, res) {
        const id = req.params.id;
        countries
            .deleteOne(id)
            .then(({ n }) => res.send(!!n))
            .catch(err => console.log(err));
    },
    getCountCountries(req, res) {
        countries.getCountCountries().then(result => res.send(result.toString()));
    },
    getCountriesSliced(req, res) {
        const { from, limit } = req.body;
        countries.getCountriesSliced(from, limit).then(result => res.send(result));
    }
};

module.exports = router;
