'use strict';

var mongoose = require('mongoose');
var Post = require('./post-model');
var User = require('../users/user-model');



module.exports = {
  load: function(req, res, next, id){
    Post.findById(id).exec()
    .then(function(post){
      req.post = post;
      next()
    })
    .then(null, next)
  },
  index: function(req, res, next) {
    Post.find().exec().then(function(posts) {
      res.json(posts);
    })
    .then(null, next)
  },

  show: function(req, res, next){
    Post.findById(req.params.id).exec()
    .then(function(post) {
      res.json(post);
    })
    .then(null, next)
  },

  create: function(req, res, next){
    Post.create(req.body)
    .then(function(article) {
      res.json(article);
    })
    .then(null, next)
  },
  update: function(req, res, next){
    for (var key in req.body){
      if(req.body.hasOwnProperty(key)) req.post[key] = req.body[key];
    }
    return req.post.save()
    .then(function(article) {
      res.json(article);
    })
    .then(null, next)
  },
  destroy: function(req, res, next){
    Post.remove({_id: req.params.id})
    .then(function() {
      res.status(204).end()
    })
    .then(null, next)
  }

}
