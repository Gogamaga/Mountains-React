const systems = require("../../data-base/system");

const router = {
    save(req, res) {
        const system = req.body;
        systems
            .save(system)
            .then(result => res.send(result))
            .catch(err => res.send(err));
    },
    getAll(req, res) {
        systems
            .getAll()
            .then(result => {
                res.send(result);
            })
            .catch(err => console.log(err));
    },
    getOne(req, res) {
        const id = req.params.id;
        systems
            .getOne(id)
            .then(result => res.send(result))
            .catch(err => console.log(err));
    },
    updateOne(req, res) {
        const id = req.params.id;
        const updateSystem = req.body;
        systems
            .updateOne(id, updateSystem)
            .then(result => res.send(result))
            .catch(err => console.log(err));
    },
    deleteOne(req, res) {
        const id = req.params.id;
        console.log(id);
        systems
            .deleteOne(id)
            .then(({ n }) => res.send(!!n))
            .catch(err => console.log(err));
    }
    //FOR UI
};

module.exports = router;
