const express = require("express");
const cors = require("cors");
const products = require("./products.json");
const { addItem, removeItem } = require("./helpers");

const app = express();
const port = 8080;

let cart = [];

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello, do you like ducks?");
});

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/products/:id", (req, res) => {
  const id = req.params.id;
  const product = products.find((product) => product.id === +id);
  res.json(product || { error: "Product not found" });
});

app.get("/cart", (req, res) => {
  res.json(cart);
});

app.put("/cart/add", (req, res) => {
  addItem(cart, req.body.id, req.body.quantity);
  res.json(cart);
});

app.put("/cart/remove", (req, res) => {
  removeItem(cart, req.body.id, req.body.quantity);
  res.json(cart);
});

app.delete("/cart", (req, res) => {
  cart = [];
  res.send("DELETE request to the homepage");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
