const express = require("express");
const router = express.Router();

const { tweetById } = require("../controllers/tweet.controller");
const { tweetMessage } = require("../validators");

router.get("/tweet");
router.get("/tweet/followers");
router.post("/tweet/create", tweetMessage);
router.delete("/tweet/:tweetId");

// params
router.param("tweetId", tweetById);

module.exports = router;
