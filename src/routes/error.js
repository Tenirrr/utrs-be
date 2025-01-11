const express = require('express');
const router = express.Router();
const errorCtrl = require("../controllers/error.js")

// Handling error http 404
router.all("/404", errorCtrl.http404);

module.exports = router;