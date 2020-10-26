const express = require("express");
const router = express.Router();

const { userRelationById } = require("../controllers/relation.controller");

router.get("/relation");
router.post("/relation/create/:userRelationId");
router.delete("/relation/:userRelationId");

// params
router.param("userRelationId", userRelationById);

module.exports = router;
