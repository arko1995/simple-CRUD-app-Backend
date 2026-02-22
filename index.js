require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 5000;
const route = require("./routes/product.routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", route);

app.get("/", (req, res) => {
  res.status(200).send("Welcome to node API server");
});

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("connected to database");
  app.listen(port, () => {
    console.log(`server started on port ${port}`);
  });
});
