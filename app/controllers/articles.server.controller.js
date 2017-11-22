var Article = require('mongoose').model('Article');
exports.addArticle = function (req,res,next) {
    var req_article = req.body;
    var article = new Article(req_article);
    article.save(function(err,article){
        if(err) return next(err);
        res.end(JSON.stringify(article));
    })
    
}
exports.listArticle = function (req,res,next) {
    Article.find({},function(err,articles){
        if(err) return next(err);
        res.end(JSON.stringify(articles))
    })
}

exports.getArticle = function (req,res,next) {
    console.log(req.params.id)
}