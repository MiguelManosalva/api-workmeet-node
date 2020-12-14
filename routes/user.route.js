const express = require("express");
const router = express.Router();

const { requireSignin, isAuth, isAdmin } = require("../controllers/auth.controller");

const {
    userById,
    read,
    update,
    history
} = require("../controllers/user.controller");

// routes
router.get("/secret/:userId", requireSignin, isAuth, isAdmin, (req, res) => {
    res.json({
        user: req.profile
    });
});

router.get("/user/:userId", requireSignin, isAuth, read);
router.get("/users", requireSignin, isAuth, read);
router.put("/user/:userId", requireSignin, isAuth, update);

// params
router.param("userId", userById);

module.exports = router;