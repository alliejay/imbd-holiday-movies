var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;
var _ = require('underscore');
var tmpl = require('./templates');
var movieModel = require('./itemModel');

module.exports = Backbone.View.extend({
  className: 'addMovie',
  events: {
      'click .movieAdder': 'submitMovie'
  },
  initialize: function() {
    console.log("trying to load form");
    if(!this.model){
      this.model = new movieModel();
    }
  },
  submitMovie: function(event) {
    event.preventDefault();
    var newMovie = {
      title: this.$el.find('input[name="title"]').val(),
      release: this.$el.find('input[name="release"]').val(),
      cover: this.$el.find('input[name="url"]').val(),
      plot: this.$el.find('input[name="plot"]').val(),
      rating: this.$el.find('input[name="rating"]').val(),
      holiday: this.$el.find('input[name="holiday"]').val()
    };
    this.model.set(newMovie);
    this.model.save();
    this.$el.find('input').val("");

    // var newModel = new movieModel(newMovie);
    // newModel.save();
    // this.collection.add(newModel);
    this.model.addOne(newModel);
  },
  template: _.template(tmpl.form),
  render: function () {
      var markup = this.template(this.model.toJSON());
      this.$el.html(markup);
      return this;
  }
});
