const express = require("express");
const router = express.Router();
const {urlCreation , urlRedirect} = require("../controller/urlcontroller");

router.route("/:urlName")
    .get(urlRedirect);
router.route("/")
    .post(urlCreation);

module.exports = router;