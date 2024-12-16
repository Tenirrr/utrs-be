const config = {
    session: {
        secret: env.SES_SECRET || "XD",
        resave: false,
        saveUninitialized: false,
        unset: "destroy",
        cookie: {
            secure: useHTTPS,
            httpOnly: true,
            sameSite: "strict",
            maxAge: 3600000
        }
    },
    mySQLStore: {
        host: 'localhost',
        port: 3306,
        user: 'your_username',
        password: 'your_password',
        database: 'your_database',
        clearExpired: true,            
        checkExpirationInterval: 900000,
        expiration: 86400000,          
    },
}