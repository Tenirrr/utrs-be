const express = require('express');
const https = require('https');
const http = require('http');
const fs = require('fs');
const morgan = require('morgan');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);

const app = express();
const env = process.env

const useHTTPS = env.USE_HTTPS === "true" ? true : false;
const sessionStore = new MySQLStore()

app.use(session({
	secret: env.SES_SECRET,
	resave: false,
	saveUninitialized: false,
	unset: "destroy",
	cookie: {
		secure: useHTTPS,
		httpOnly: true,
		sameSite: "strict",
		maxAge: 3600000
	}
}));

if (env.NODE_ENV === "development") {
	app.use(morgan("combined"))
} else {
	app.use(morgan("combined"))
}

app.get('/', (req, res) => {
	res.send('Hello, world!');
});

const port = env.PORT || 3000;

if (useHTTPS) {
	const optionsHTTPS = {
		key: fs.readFileSync(env.SSL_KEY_PATH),
		cert: fs.readFileSync(env.SSL_CERT_PATH),
	}

    https.createServer(optionsHTTPS, app).listen(port, () => {
    	console.log("HTTPS server listening on port: " + port);
  	});
} else {
  	http.createServer(app).listen(port, () => {
    	console.log("HTTP server listening on port: " + port);
  	});
}