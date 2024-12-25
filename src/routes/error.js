const express = require('express');
const router = express.Router();
const errorCtrl = require("../controllers/error.js")

router.get("/404", errorCtrl.http404);

module.exports = router;