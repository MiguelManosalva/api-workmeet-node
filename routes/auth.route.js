const express = require("express");
const router = express.Router();

const { userSignupValidator, userLoginValidator } = require("../validators");

router.post("/sign-up", userSignupValidator);
router.post("/log-in", userLoginValidator);

module.exports = router;
