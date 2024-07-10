const express = require("express");
const router = express.Router();
// const ownerModel = require("../models/owner-model");

if(process.env.NODE_ENV !== "production") {
    router.post("/create" ,async function(req, res) {
        res.send("Hello World!");
       let owners = await ownerModel.find();
       if(owners.length > 0) {
         return res
         .status(500)
         .send("You don't have permission to perform this action");
       }

       let { fullname, email , password } = req.body;

      let createdOwner = await ownerModel.create({
           fullname,
           email,
           password
       });

      res.status(203).send(createdOwner);
    });
}

router.get("/", (req, res) => {
    res.send("Hello World!");
});


console.log(process.env.NODE_ENV);



module.exports = router;