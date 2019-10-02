const express = require('express');
const router = express.Router();
const TripToHellModel = require('../model/article');
let ticketsArr;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('api', { ticketList: ticketsArr });
});

router.post('/', function(req, res, next) {
  req.body.forEach((item, i, arr)=>{
    const { fromName, toName, departAt, vehicle } = item;
    const article = new TripToHellModel({
      fromName,
      toName,
      departAt,
      vehicle
    });
    article.save();
    ticketsArr=arr;
  });
  res.send('ok');
});

module.exports = router;
