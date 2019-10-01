const express = require('express');
const router = express.Router();
const ArticleModel = require('../model/article');
let ticketsArr = [];

/* GET users listing. */
router.get('/', function(req, res, next) {

  res.render('index', {ticketList: ticketsArr });
});

router.post('/', function(req, res, next) {
  const{ tickets } = req.body;
  tickets.forEach((item,i,arr)=>{
    const { fromName, toName, departAt, vehicle } = item;
    const article = new ArticleModel({
      tickets:arr,
    });
    ticketsArr=arr;
    article.save();
  });
  res.send('ok');

});

module.exports = router;
