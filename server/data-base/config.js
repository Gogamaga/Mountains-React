const USER_DATA_BASE = "gogamaga";
const PASSWORD_DATA_BASE = "chatty35";
const DATA_BASE = `mongodb://${USER_DATA_BASE}:${PASSWORD_DATA_BASE}@ds029585.mlab.com:29585/mountains`;

const COLLECTIONS = {
    ARTICLE: "article",
    SYSTEM: "systems",
    COUNTRIES: "countries",
    MOUNTAINS: "mountains",
    FOTOS: "fotos",
    VIDEOS: "videos",
    USERS: "users"
};

const AUTH_CONFIG = {
    secretKey: "qwerty",
    expire: 1000 * 60 * 2 * 10
};

module.exports = {
    DATA_BASE,
    COLLECTIONS,
    AUTH_CONFIG
};
