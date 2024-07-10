const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost:27017/ecommerce");

const ownerSchema =  mongoose.Schema({
 
    fullname: {
        type: String,
        minlength: 3,
        trim: true
    },

    email: String,
    password: String,

    picture: String,
    gstno:String
    
});

module.exports = mongoose.model("owner",ownerSchema); 

// const User = mongoose.model("User", userSchema);
// module.exports = User;

