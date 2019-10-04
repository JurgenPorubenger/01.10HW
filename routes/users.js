var express = require('express');
var router = express.Router();
const ArticleModel = require('../model/article');

router.use("/", function(request, response, next){
  let id = request.query.trip;
  console.log(id);
  next();
});

router.post('/', function(req, res, next) {
  res.json(req.body);
});
/* GET users listing. */
router.get('/', function(req, res, next) {
  ArticleModel.find({fromName:'London'}).then(data=> {res.send(data)})
      .catch(err=> console.log(err))
  console.log('Get-200');
  res.send();
});

module.exports = router;
