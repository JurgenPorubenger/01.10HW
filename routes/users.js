var express = require('express');
var router = express.Router();
const ArticleModel = require('../model/article');

/* GET users listing. */
router.get('/', function(req, res, next) {
  ArticleModel.find({}).then(data=> {res.send(data)})
      .catch(err=> console.log(err))
});

module.exports = router;
