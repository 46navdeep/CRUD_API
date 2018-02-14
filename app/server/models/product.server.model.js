var mongoose = require('mongoose');

var Schema = mongoose.Schema({
    name: String,
    instock: String,
    price: String
});

module.exports = mongoose.model('Todo', Schema);
