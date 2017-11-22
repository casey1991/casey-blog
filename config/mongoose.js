var mongoose = require("mongoose");
var config = require('./config.js');
module.exports = function () {
    mongoose.connect(config.db,{useMongoClient:true})
    require('../app/models/article.js');
}