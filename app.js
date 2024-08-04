
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");
const expressSession = require("express-session");

const indexRouter = require("./routes/index");
const ownerRouter = require("./routes/ownerRouter");
const userRouter = require("./routes/userRouter");
const productRouter = require("./routes/productRouter");
// const routes = require("routes");

require("dotenv").config();

const db = require("./config/mongoose-connection");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));    
app.use(cookieParser());
app.use(
    expressSession({
        resave: false,
        saveUninitialized: false,
        secret: process.env.EXPRESS_SESSION_SECRET,
    })
);

app.use(flash());
app.use(express.static(path.join(__dirname, "public")));
app.set('view engine', 'ejs');

app.use("/", indexRouter );
app.use("/owner", ownerRouter);
app.use("/user", userRouter);
app.use("/product", productRouter);



app.listen(3000);