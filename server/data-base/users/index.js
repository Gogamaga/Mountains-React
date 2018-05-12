const jwt = require("jsonwebtoken");
const shortid = require("shortid");

const Users = require("./schema");
const config = require("../config");

module.exports = {
    save({ name, password, expireDate }) {
        const user = new Users({
            name,
            password,
            expireDate
        });
        return user.save();
    },
    getAll() {
        return Users.find({});
    },
    getOneForAuthorization(name) {
        return Users.findOne({ name });
    },
    getOneForVerification(id, callback) {
        Users.findById(id)
            .select("name -_id expireDate key")
            .exec(callback);
    },
    updateOne(id, articles) {
        return Users.findByIdAndUpdate(id, articles, { new: true });
    },
    findUserAndUpdateExpireDate(id, expireDate, key, callback) {
        Users.findByIdAndUpdate(id, { expireDate, key }, { new: true }).exec(callback);
    },
    verificationUsersCookies(cookies, cd) {
        jwt.verify(cookies, config.AUTH_CONFIG.secretKey, (err, dec) => {
            if (err) return console.log("ERR JWT");
            const { _id, iat, key } = dec;
            this.getOneForVerification(_id, (err, user) => {
                if (err) return console.log(err);
                if (true) {
                    const newKey = shortid.generate();
                    const exp = Math.floor(Date.now() / 1000) + config.AUTH_CONFIG.expire;
                    this.findUserAndUpdateExpireDate(_id, exp, newKey, (err, result) => {
                        if (err) return console.log(err);
                        const token = jwt.sign(
                            { _id, name: result.name, iat: exp, key: result.key },
                            config.AUTH_CONFIG.secretKey
                        );
                        cd(token);
                    });
                }
            });
        });
    },
    verificationUser(name, password) {
        return new Promise((resolve, reject) => {
            this.getOneForAuthorization(name).then(result => {
                if (!result) {
                    reject(false);
                } else {
                    if (result.password !== password) {
                        reject(false);
                    } else {
                        resolve(result);
                    }
                }
            });
        });
    },
    login({ name, password }) {
        return new Promise((resolve, reject) => {
            this.verificationUser(name, password)
                .then(result => {
                    const { _id, name, expireDate } = result;
                    const key = shortid.generate();
                    const exp = Math.floor(Date.now() / 1000) + config.AUTH_CONFIG.expire;
                    this.findUserAndUpdateExpireDate(_id, exp, key, (err, result) => {
                        console.log(result);
                    });
                    const token = jwt.sign(
                        { _id, name, iat: exp, key },
                        config.AUTH_CONFIG.secretKey
                    );
                    resolve({ token, exp });
                })
                .catch(err => err);
        });
    }
};
