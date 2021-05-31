var express = require('express');
var router = express.Router();

var Product = require("../../models/product");  
/* GET home page. */
router.get('/',  async function(req, res) {
  let products = await Product.find()
  res.send(products);
});

module.exports = router;
