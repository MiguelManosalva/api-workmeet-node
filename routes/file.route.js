const express = require("express");
const router = express.Router();

router.post("/file/avatar/upload");
router.post("/file/banner/upload");
router.get("/file/avatar");
router.get("/file/banner");

module.exports = router;
