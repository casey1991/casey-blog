var controller = require('../controllers/articles.server.controller.js');
module.exports = function (app) {
    app.route('/articles').get(controller.listArticle).post(controller.addArticle);
    app.route('/articles/:id').get(controller.getArticle);
}