module.exports = {
  movieTmpl: [
          '<section class="movieSection">',
            '<ul><h3><%= title %></h3>',
              '<li><img src="<%= cover %>"/></li>',
            '</ul></section>',
          '<aside class="movieAside">',
            '<ul><h4>MOVIE DETAILS</h4>',
              '<li><b>Holiday Association:</b> <%= holiday %></li>',
              '<li id="rating"><b>Rating:</b> <%= rating %></li>',
              '<li class="customRating hidden"><input type="text" name="newRating" placeholder="1 - 10"></li>',
              '<li class="customRating hidden"><input type="submit" name="ratingSubmit" value="submit"></li>',
              '<li><b>Release Year:</b> <%= release %></li>',
              '<li><b>Synopsis:</b> <%= plot %></li>',
              '</ul>',
              '<button type="submit" name="edit">Edit Movie Details</button>',
              '<button type="submit" id="delete" name="delete">Delete Movie</button>',
          '</aside>'
  ].join(""),
  form: [
    '<div id="movies">',
      '<form class="newMovies">',
        '<input type="text" name="title" placeholder="title">',
        '<input type="text" name="release" placeholder="year released"><br>',

        '<input type="text" name="url" placeholder="cover photo url">',
        '<input type="text" name="plot" placeholder="plot"><br>',

        '<input type="text" name="rating" placeholder="rating">',
        '<input type="text" name="holiday" placeholder="holiday association"><br>',

        '<button type="submit" class="movieAdder" name="submit">Submit New Movie</button>',
      '</form>',
  ].join("")
};
