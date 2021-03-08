const express = require("express");
const router = express.Router();

const { route } = require("../controllers/route");

router.get("/", route);

module.exports = router;
