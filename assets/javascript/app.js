var queryURL = "http://quotes.rest/qod.json";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {
      console.log(response);
   
var quote = response.contents.quotes[0].quote;
$("#quote-links").append("Quote of the day: " + quote);


var author = response.contents.quotes[0].author;
$("#author-links").append(author);

console.log(quote);
console.log(author);

});