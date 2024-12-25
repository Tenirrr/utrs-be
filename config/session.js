const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const crypto = require('crypto');

const env = process.env;
const useHTTPS = env.USE_HTTPS === "true" ? true : false;
const randomSecretLength = 128;

module.exports = session({
    secret: env.SES_SECRET_RAND === "true" ? crypto.randomBytes(randomSecretLength).toString('hex') : env.SES_SECRET,
    resave: false,
    saveUninitialized: false,
    unset: "destroy",
    cookie: {
        secure: useHTTPS,
        httpOnly: true,
        sameSite: "strict",
        maxAge: 43200000
    },
    store: new MySQLStore({
        host: env.SES_DB_HOST,
        port: env.SES_DB_PORT,
        database: env.SES_DB_NAME,
        user: env.SES_DB_USER,
        password: env.SES_DB_PASS,
        clearExpired: true,                 // clear expired session from database
        checkExpirationInterval: 900000,    
        expiration: 43200000,
        debug: process.env.NODE_ENV === "development" ? true : false
    })
})