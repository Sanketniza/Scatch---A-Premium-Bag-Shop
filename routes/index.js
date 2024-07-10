const express = require("express");
const router = express.Router();
const isLoggedIn = require("../middlerwares/isLoggedIn");


router.get("/", (req, res) => {
    let error = req.flash("error");
    res.render("index", {error});
});

router.get("/shop" , isLoggedIn , function (req, res) {
    res.render("shop");
});

module.exports = router;