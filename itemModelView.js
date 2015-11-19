var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
Backbone.$ = $;
var tmpl = require('./templates');
var MovieModel = require(('./itemModel'));

module.exports = Backbone.View.extend({
  tagName: 'article',
  className: 'movie',
  template: _.template(tmpl.movieTmpl),
  events: {
    "click #delete": "deleteItem",
    "dbclick #rating": 'changeRating'
  },
  deleteItem: function () {
    event.preventDefault();
    this.model.destroy();
    this.$el.remove();
  },
  changeRating: function() {
    $('.customRating').removeClass('hidden');
    var userRating = this.$('input[name="newRating"]').val();
    var edittedModel = this.model;
    edittedModel.save({rating: userRating});
    this.render();
  },
  render: function () {
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    return this;
  },
  initialize: function () {}

});
