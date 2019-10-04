var express = require('express');
var router = express.Router();
const ArticleModel = require('../model/article');


router.post('/', function(req, res, next) {
  console.log(req.body);
  res.json(req.body);
});
/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('Get-200');

  // ArticleModel.find({}).then(data=> {res.send(data)})
  //     .catch(err=> console.log(err))
  res.send();
});

module.exports = router;
