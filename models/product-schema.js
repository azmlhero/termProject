var mongoose= require('mongoose');

var productSchema = mongoose.Schema({
    name: {
        type: String
    },
    price: {
        type: Number
    }
}
)

var ProductSchema = mongoose.model("Product", productSchema);


module.exports= ProductSchema;

