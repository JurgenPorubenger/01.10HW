const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
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
    article.save()
        .then(function(doc){
      console.log("Сохранен объект", doc);
    })
        .catch(function (err){
          console.log(err);
        });
    ticketsArr=arr;
  });
  res.send('ok');
});

module.exports = router;
