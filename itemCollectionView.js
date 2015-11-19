var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
Backbone.$ = $;
var MovieView = require('./itemModelView');
var movieModel = require('./itemModel');


module.exports = Backbone.View.extend({
  el: '#movies',
  events: {

  },
  addOne: function (movieModel) {
    var movieView = new MovieView({model: movieModel});
    this.$el.append(movieView.render().el);
  },
  addAll: function () {
    _.each(this.collection.models, this.addOne, this);
  },
  initialize: function () {
    this.addAll();
  }
});
