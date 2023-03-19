const Product = require("../models/productModel");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Errorhander = require("../utils/errorhander");

// Create Product --Admin
exports.createProduct = catchAsyncErrors(async (req, res, next) => {
  const { name, category, price, stock } = req.body;

  await Product.create({
    name,
    category,
    price,
    stock,
    image: req.file.path,
  });
  res.redirect("/");
});

// Get All Product
exports.allProducts = catchAsyncErrors(async (req, res, next) => {
  const category = req.query.category || "";

  const products = await Product.find({
    category: {
      $regex: category,
      $options: "i",
    },
  }).sort({ _id: -1 });

  res.status(200).json({
    success: true,
    products,
  });
});

// Get Product Details
exports.singleProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(
      new Errorhander(`Product does not exist with Id: ${req.params.id}`, 404)
    );
  }

  res.status(200).json({
    success: true,
    product,
  });
});
