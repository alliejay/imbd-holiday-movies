// ITEM COLLECTION

var Backbone = require('backbone');
var movieModel = require('./itemModel');

module.exports = Backbone.Collection.extend({
  url: 'http://tiny-tiny.herokuapp.com/collections/holidaymovieapp',
  model: movieModel
});
