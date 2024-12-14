const Config = {
    dialect: 'mariadb',           // Specifies the type of database you're using
    logging: console.log,         // Logs all SQL queries
    pool: {
        max: 25,                  // The maximum number of connections in the pool.
        min: 5,                   // The minimum number of connections in the pool.
        acquire: 30000,           // The maximum time (in ms) to wait for a connection before throwing an error.
        idle: 10000               // The maximum time (in ms) a connection can be idle before being released.
    },
    retry: {
        max: 3                    // The maximum number of connection attempts.
    },
    define: {                     // Global model configuration. You can set default values for models.
        timestamps: true,         // The timezone to use when interacting with the database. This can be set to a specific time zone offset.
        underscored: false,       // If false, the createdAt and updatedAt fields will not be automatically created.
        freezeTableName: true     // If true, Sequelize will not automatically pluralize table names.
    },
    timezone: '+02:00',
    dialectOptions: {
        timezone: 'local',  
        connectTimeout: 10000
    },
    benchmark: process.env.NODE_ENV === 'development' ? true : false
}

module.exports = Config