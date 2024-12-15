const { Sequelize } = require("sequelize");
const cfg = require("../../config/database.js");
const env = process.env;

const sequelize = new Sequelize(env.DB_DBNAME, env.DB_USER, env.DB_PASS, {
    host: env.DB_HOST,
    port: env.DB_PORT || 3306,
    dialect: cfg.dialect,
    logging: cfg.logging,
    pool: cfg.pool,
    retry: cfg.retry,
    define: cfg.define,
    timezone: cfg.timezone,
    dialectOptions: cfg.dialectOptions,
    benchmark: cfg.benchmark
});

sequelize.authenticate()
    .then(() => console.log("Connected to database!"))
    .catch((err) => console.error("Unable to connect to database: ", err));

module.exports = sequelize;