// business.route.js

const express = require('express');


// Require Business model in our routes module
let User = require('../models/user.model');


// Defined store route



exports.poster = function (req, res) {
  let user = new User(req.body);
  user.save()
    .then(user => {
      res.status(200).json({'business': 'business in added successfully'});
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
};


// Defined get data(index or listing) route
exports.lister = function (req, res) {
    User.find(function(err, businesses){
    if(err){
      console.log(err);
    }
    else {
      res.json(businesses);
    }
  });
};

// Defined edit route
exports.edit = function (req, res) {
  let id = req.params.id;
  User.findById(id, function (err, business){
      res.json(business);
  });
};

//  Defined update route
exports.maj =function (req, res) {
    User.findById(req.params.id, function(err, business) {
    if (!business)
      res.status(404).send("data is not found");
    else {
        business.person_name = req.body.person_name;
        business.business_name = req.body.business_name;

        business.save().then(business => {
          res.json('Update complete');
        })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
};

// Defined delete | remove | destroy route
exports.deleter = function (req, res) {
    User.findByIdAndRemove({_id: req.params.id}, function(err, user){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
};


