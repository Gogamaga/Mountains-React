const users = require("../../data-base/users");
const config = require("../../data-base/config");

const router = {
    save(req, res) {
        const user = req.body;
        users.save(user).then(result => res.send(result));
    },
    getOneForVerification(req, res) {
        const id = req.params.id;
        users.getOneForVerification(id).then(result => res.send(result));
    },
    login(req, res) {
        const user = req.body;
        users
            .login(user)
            .then(result => {
                console.log(result);
                res.cookie("token", result.token, { maxAge: config.AUTH_CONFIG.expire });
                res.send(true);
            })
            .catch(err => res.send(false));
    }
};

module.exports = router;
