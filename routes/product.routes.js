const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getSingleProduct,
  createNewProduct,
  updateProduct,
  deleteProduct,
} = require("../controller/products.controller");

router.route("/products").get(getAllProducts).post(createNewProduct);
router
  .route("/product/:id")
  .get(getSingleProduct)
  .put(updateProduct)
  .delete(deleteProduct);

module.exports = router;
