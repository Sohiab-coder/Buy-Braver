const express = require("express");
require("dotenv").config({ path: "./config/config.env" });
const cookieParser = require("cookie-parser");
const error = require("./middleware/error");
const app = express();
const path = require("path");

// use middlewares
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use("/uploads", express.static("uploads"));

global.rootPath = path.resolve(__dirname);

// import Routes
const product = require("./routes/productRoute");

// use Routes
app.use("/api/v1", product);

// error middleware
app.use(error);

module.exports = app;
