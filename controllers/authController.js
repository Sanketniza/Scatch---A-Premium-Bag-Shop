// authController.js
const userModel = require("../models/user-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { generateToken } = require("../utils/generateToken");

module.exports.registerUser = async function (req, res) {
  try {
    const { fullname, email, password } = req.body;

    const user = await userModel.findOne({ email });
    if (user) return res.status(401).send("User already exists");

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const newUser = await userModel.create({
      fullname,
      email,
      password: hash,
    });

    const token = generateToken(newUser);
    res.cookie("token", token);
    res.send("User created successfully");
    
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports.loginUser = async function (req, res) {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });

    if (!user) return res.status(401).send("User does not exist");

    const result = await bcrypt.compare(password, user.password);
    if (result) {
      const token = generateToken(user);
      res.cookie("token", token);
      res.send("User logged in successfully");
    } else {
      res.status(401).send("Incorrect password");
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};
