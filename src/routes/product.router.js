const express = require("express");

const router = express.Router();

// me traigo el controlador
const ProductController = require("../controllers/producto.controller.js");
const productController = new ProductController();

router.post("/", productController.postProducts);
router.get("/", productController.getProductos);


module.exports = router;
