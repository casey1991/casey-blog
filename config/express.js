var express = require("express");
var bodyParser = require('body-parser');
module.exports = function () {
    var app = express();
    
    app.set('view engine','pug');
    app.set('views','app/views');
    app.use(express.static('public'));
    
    app.use(bodyParser.urlencoded({extended:false}))
    app.use(bodyParser.json())
    
    
    require('./mongoose.js')();//牵引数据库
    
    require('../app/routes/articles.server.route.js')(app);
    require("../app/routes/index.server.route.js")(app);
    
    return app;
}