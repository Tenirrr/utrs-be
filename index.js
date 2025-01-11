const express = require('express');
const https = require('https');
const http = require('http');
const fs = require('fs');
const morgan = require('morgan');

const app = express();
const env = process.env
const useHTTPS = env.USE_HTTPS === "true" ? true : false;

app.use(require("./config/session.js"));

if (env.NODE_ENV === "development") {
	app.use(morgan("combined"))
} else {
	app.use(morgan("combined"))
}

app.use(express.json());
app.use(cookieParser());

app.use("/auth", require("./src/routes/auth.js"))
app.use("/error", require("./src/routes/error.js"))


app.use((req, res) => {
	return res.redirect("/error/404");
});

const port = env.PORT || 3000;

if (useHTTPS === "true") {
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