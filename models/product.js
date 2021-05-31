var mongoose= require('mongoose');

var productSchema = mongoose.Schema(
    {
        name:String,
        charges:Number,
    }
);

var Product = mongoose.model("Product", productSchema);


module.exports= Product;

