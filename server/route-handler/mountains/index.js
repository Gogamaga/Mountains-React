const mountains = require("../../data-base/mountains");

const router = {
    save(req, res) {
        const mountain = req.body;
        console.log(mountain);
        mountains
            .save(mountain)
            .then(result => res.send(result))
            .catch(err => res.send(err));
    },
    getAll(req, res) {
        mountains
            .getAll()
            .then(result => res.send(result))
            .catch(err => console.log(err));
    },
    getOne(req, res) {
        const id = req.params.id;
        mountains
            .getOne(id)
            .then(result => res.send(result))
            .catch(err => console.log(err));
    },
    updateOne(req, res) {
        const id = req.params.id;
        const updateMountain = req.body;
        mountains
            .updateOne(id, updateMountain)
            .then(result => res.send(result))
            .catch(err => console.log(err));
    },
    deleteOne(req, res) {
        const id = req.params.id;
        mountains
            .deleteOne(id)
            .then(({ n }) => res.send(!!n))
            .catch(err => console.log(err));
    },
    getAllMountainsName(req, res) {
        mountains.getAllMountainsName().then(result => res.send(result));
    }
};

module.exports = router;
