$.getJSON('https://cors-anywhere.herokuapp.com/http://newsapi.org/v2/everything?q=rich&from=2020-10-09&sortBy=publishedAt&apiKey=29759e74bf4c486c8a976922910d3207', function(data) {
  console.log(data);
  
  $.each(data, function(index, value) {
    console.log(value);
    
    var name = value.user.name;
    var bio = value.user.bio;
    var imageURL = value.urls.regular;
    
    $('.output').append('<h1 class="name">' + name + '</h1><h2 class="bio">' + bio + '</h2><div class="image"><img src="' + imageURL + '"/></div>');
  });
});