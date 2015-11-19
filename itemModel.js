// ITEM MODEL

var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  urlRoot: 'http://tiny-tiny.herokuapp.com/collections/holidaymovieapp',
  idAttribute: '_id',
  defaults: function() {
    return {
      title: "generic title",
      release: 1775,
      cover: "photo-url",
      plot: "plot",
      rating: "rating",
      holiday: "generic holiday"
    };
  },
  initialize: function () {
    console.log("movie model being created");
  }
});
