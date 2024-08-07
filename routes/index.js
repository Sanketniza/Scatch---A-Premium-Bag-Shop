const express = require("express");
const router = express.Router();
const isLoggedIn = require("../middlerwares/isLoggedIn");
const productModel = require("../models/product-model");


router.get("/", (req, res) => {
    let error = req.flash("error");
    res.render("index", {error});
});

router.get("/shop" , isLoggedIn , async function (req, res) {
   let products = await productModel.find();
   res.render("shop" , {products});
});
   

router.get("/logout", isLoggedIn , function (req, res) {
    res.render("shop");
})

module.exports = router;