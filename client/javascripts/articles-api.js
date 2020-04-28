// jshint esversion: 6

let main = function() {
  /*
    let prefixURL = "http://api.flickr.com/services/feeds/photos_public.gne?tags=";
    let suffixURL = "&format=json&jsoncallback=?";
    //get value entered by user from textbox
    let flickrTag = $("input").???();*/
  let requestURL = "https://thejsway-server.herokuapp.com/api/articles";

  //clear old photos
  /*  $(".photos").???("");
   */
  $.getJSON(requestURL, function(response) {
    let firstArticle = response[0];
    console.log(`Article ${firstArticle.id}
      Title:${firstArticle.title}
      Content: ${firstArticle.content}`);

    response.forEach(function(item, index) {
      let newDiv = document.createElement("div");
      document.querySelector(".articles").appendChild(newDiv);

      let newH3 = document.createElement("h3");
      newH3.textContent = `Article ${item.id}`;
      newDiv.appendChild(newH3);

      let titleParagraph = document.createElement("p");
      titleParagraph.textContent = item.title;
      newDiv.appendChild(titleParagraph);

      let bodyParagraph = document.createElement("p");
      bodyParagraph.textContent = item.content;
      newDiv.appendChild(bodyParagraph);
    });
  });
};

$(document).ready(main);
