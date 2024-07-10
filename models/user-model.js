const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost:27017/ecommerce");

const userSchema =  mongoose.Schema({
 
    fullname: {
        type: String,
        minlength: 3,
        trim: true
    },

    email: String,
    password: String,

    cart: {
        type: Array,
        default: []
    },

    isadmin:boolean,

    oders:{
        type: Array,
        default: []
    },

    contact: String,
    picture: String

    
});

// const User = mongoose.model("User", userSchema);
// module.exports = User;
module.exports = mongoose.model("user", userSchema);

