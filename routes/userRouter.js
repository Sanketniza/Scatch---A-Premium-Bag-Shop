
const express = require("express");
const router = express.Router();
// const isLoggedIn = require("../middlerwares/isLoggedIn");
const {registerUser , loginUser , logout} = require("../controllers/authController");


router.get("/", (req, res) => {
    res.send(" Hey it's working");
});

router.post("/register",registerUser );
  
router.post("/login" , loginUser);

router.get("/logout" , logout);



module.exports = router;