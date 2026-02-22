const express = require("express");
const Product = require("../models/product.model");

const getAllProducts = async (req, res) => {
  const product = await Product.find();
  res.status(200).json({ success: true, data: product });
};

const getSingleProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ success: false, msg: "Product not found" });
    }
    res.status(200).json({ success: true, data: product });
  } catch (error) {
    res.status(500).send(error);
  }
};

const createNewProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json({ success: true, data: product });
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, {
      returnDocument: "after",
      runValidators: true,
    });
    if (!product) {
      res.status(404).json({ success: false, msg: "Product not found" });
    }

    const newProduct = await Product.findById(id);
    res.status(200).json({ success: true, data: newProduct });
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      res.status(404).json({ success: false, msg: "Product not found" });
    }
    res
      .status(200)
      .json({ success: true, msg: `Product Has been deleted successfully` });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getAllProducts,
  getSingleProduct,
  createNewProduct,
  updateProduct,
  deleteProduct,
};
