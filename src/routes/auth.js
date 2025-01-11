const express = require('express');
const router = express.Router();
const authCtrl = require("../controllers/auth.js")

// Handling login in to app
router.get("/signin", authCtrl.signin);
// Handling login out from app
router.get("/signout", authCtrl.signout);
// Handling registering new account to app
router.post("/signup", authCtrl.signup);

// Handling setting up 2FA for account
router.post("/setup-2fa", authCtrl.setup2fa);
// Handling verifing 2FA for account
router.post("/verify-2fa", authCtrl.verify2fa);

module.exports = router;