const express = require("express");
const {
  createProduct,
  allProducts,
  singleProduct,
} = require("../controllers/productController");
const uploadHandler = require("../middleware/multer");

const route = express.Router();

// Create Product
route.post("/product/new", uploadHandler, createProduct);

// All Product
route.get("/allproducts", allProducts);

// Get Single Product
route.get("/product/:id", singleProduct);

module.exports = route;
