const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
// const dotenv = require("dotenv");
// const userRoute = require("./routes/user");
// const authRoute = require("./routes/auth");
// const productRoute = require("./routes/product");
// const cartRoute = require("./routes/cart");
// const orderRoute = require("./routes/order");
// const stripeRoute = require("./routes/stripe");
const path = require("path");
const cookieParser = require("cookie-parser");

// dotenv.config();
// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));    
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.set('view engine', 'ejs');


// app.use("/api/auth", authRoute);
// app.use("/api/users", userRoute);
// app.use("/api/products", productRoute);
// app.use("/api/carts", cartRoute);
// app.use("/api/orders", orderRoute);
// app.use("/api/checkout", stripeRoute);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(3000);