var $ = require('jquery');
var MovieCollection = require('./itemCollection');
var MovieCollectionView = require('./itemCollectionView');
var movieModel = require('./itemModel');
var LayoutView = require('./layoutView');

$(function () {

  // var movies = new MovieCollection();
  //
  // movies.fetch().then(function (data) {
  //   console.log("these are the movies: ", movies);
  //   var movieView = new MovieCollectionView({collection: movies});

  new LayoutView();
  // });
});
