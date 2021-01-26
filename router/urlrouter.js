const express = require("express");
const router = express.Router();
const {urlCreation , urlRedirect} = require("../controller/urlcontroller");


//Using React Router And Calling Corresponding Function
router.route("/:urlName")
    .get(urlRedirect);

    
router.route("/")
    .post(urlCreation);

module.exports = router;