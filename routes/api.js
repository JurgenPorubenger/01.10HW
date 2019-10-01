const express = require('express');
const router = express.Router();
const ArticleModel = require('../model/article');
let ticketsArr = [];

/* GET users listing. */
router.get('/', function(req, res, next) {

  res.render('api', {ticketList: ticketsArr });
});

router.post('/', function(req, res, next) {
  const{ tickets } = req.body;
  const article = new ArticleModel({
    tickets:tickets,
  });
  ticketsArr=tickets;
  console.log(ticketsArr);
  article.save();

  // tickets.forEach((item,i,arr)=>{
  //   const { fromName, toName, departAt, vehicle } = item;
  //   const article = new ArticleModel({
  //     tickets:arr,
  //   });
  //   ticketsArr=arr;
  //   article.save();
  // });
  res.send('ok');

});

module.exports = router;
