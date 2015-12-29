function addStar( label, url, x, y ) {
  $('#stars').append('<a class="star" style="left:' + x + 'px;top:' + y + 'px" href="' + url + '"><span>' + label + '</span></a>');
}

jQuery.getJSON("stars.json", function( stars ) {
  $.each(stars, function( label, data ) {
    addStar( label, data.url, data.x, data.y);
  })
});

$(document).ready( function() {

  setTimeout(function() {
    $('#picture, #stars, #moon, #sun').css("transform", "translateY(0%)");
  }, 0);

});

$('#container').click(function(evt) {
  console.log(evt.toElement.id);
  if( evt.toElement.id === 'stars' )
    addStar("rlamacraft", "http://rlamacraft.co.uk", evt.clientX, evt.clientY);
})
