var express = require('express');
var router = express.Router();

var Product = require("../../models/product-schema");
 /* GET home page. */
 router.get('/products',  async function(req, res) {
     let prods = Product.find();
   res.status(200).send(prods);
 });
module.exports = router;
