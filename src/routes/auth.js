const express = require('express');
const router = express.Router();
const authCtrl = require("../controllers/auth.js")

router.post("/signin", authCtrl.signin);
router.get("/signout", authCtrl.signout);
router.post("/signup", authCtrl.signup);

router.post("/setup-2fa", authCtrl.setup2fa);
router.post("/verify-2fa", authCtrl.verify2fa);

module.exports = router;