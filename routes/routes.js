const express = require("express");
const router = express.Router();
const {getQuestions} = require("../controllers/Controller");
const {getAttacks} = require("../controllers/Controller");
const {getAbout} = require("../controllers/Controller");
const {getGrunwald} = require("../controllers/Controller");

router.route("/").get(getQuestions);
router.route("/").get(getAttacks);
router.route("/").get(getAbout);
router.route("/").get(getGrunwald);

module.exports = router;
