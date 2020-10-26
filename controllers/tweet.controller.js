const Tweet = require("../models/tweet");

// middlewares rest
exports.tweetById = (req, res, next, id) => {
    Tweet.findById(id).exec((err, tweet) => {
        if (err || !tweet) {
            return res.status(404).json({
                error: "Tweet doesn't exist"
            });
        }
        req.tweet = tweets;
        next();
    });
};
