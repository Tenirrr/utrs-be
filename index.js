const express = require('express');
const https = require('https');
const http = require('http');
const fs = require('fs');
const morgan = require('morgan');

const app = express();
const env = process.env

const port = env.PORT || 3000;

if (env.NODE_ENV === "development") {
	app.use(morgan("combined"))
} else {
	app.use(morgan("combined"))
}

app.get('/', (req, res) => {
	res.send('Hello, world!');
});

if (env.USE_HTTPS === "true") {
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