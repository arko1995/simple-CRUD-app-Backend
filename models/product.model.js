const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter product name"],
    },

    quantity: {
      type: Number,
      default: 0,
      required: [true, "Enter product quantity"],
    },

    price: {
      type: Number,
      required: [true, "Please enter product price"],
      default: 0,
    },
    image: {
      type: String,
      require: false,
    },
  },
  {
    timestamps: true,
  },
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
