
var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
// var HeaderView = require('./headerView');
var FormView = require('./formView');
var MovieView = require('./itemCollectionView');
var MovieCollection = require('./itemCollection');

module.exports = Backbone.View.extend({
  el: '.wrapper',
  initialize: function () {
      var self = this;
      // var headerHTML = new HeaderView();
      // var footerHTML = new FooterView();
      var formHTML = new FormView();
      var movieCollection = new MovieCollection();

      movieCollection.fetch().then(function () {
      var movieView = new MovieView({collection: movieCollection});
      self.$el.find('#forms').html(formHTML.render().el);

      // self.$el.find('header').html(headerHTML.render().el);
      // self.$el.find('footer').html(footerHTML.render().el);
    });
  }
});
