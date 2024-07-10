const mongoose = require("mongoose");
const config = require("config");

const dbgr = require("debug")("development:mongoose");

mongoose
.connect(`${config.get("MONGODB_URI")}/ecommerce`) 
.then(function () {
    dbgr("MongoDB connected successfully");
})
.catch(function (err) {
    console.log(err);
});

//todo: .then and .catch is used to handle errors in mongoose connection , if any are thrown by mongoose it will be handled here 

module.export = mongoose.connection;