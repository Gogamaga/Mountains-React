const users = require("../data-base/users");
const config = require("../data-base/config");
var setCookie = require("set-cookie");

function middleWareForAuth() {
    return function(req, res, next) {
        users.verificationUsersCookies(req.cookies.token, token => {
            res.cookie("token", token, { maxAge: config.AUTH_CONFIG.expire });
            res.newToken = token;
            next();
        });
    };
}

module.exports = middleWareForAuth;
