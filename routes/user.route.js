const express = require("express");
const router = express.Router();

router.get("/user/list");
router.get("/user/profile");
router.put("/user");

module.exports = router;
