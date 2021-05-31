var express = require('express');
var router = express.Router();

var Product = require("../../models/product-schema");
/* GET home page. */
router.get('/products',  async function(req, res) {
  let products = await Product.find()
  res.send(products);
});

router.post('/products',  async function(req, res) {
  let prod = new Product({
    name: req.body.name,
    price: req.body.price
  });
  prod.save();
  res.status(200).send("Product added!");
});

module.exports = router;
