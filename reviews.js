$(document).ready(function() {
  $(".pull-right").on("click", addReview);
  $(".list-group").on("click", ".link-delete", deleteReview);
});

function addReview() {
  var review = window.prompt("Submit your review of Laudable Coffee.");
  var delete_link = '<a href="#" class="link-delete">(Delete your review)</a>'
  $(".list-group").append("<li class='list-group-item'>" + review + " " + delete_link + "</li>");
  numReviews = $(".list-group-item").length;
  $(".total").html(numReviews + " reviews");
  ;

  if (numReviews == 1) {
    $(".total").html(numReviews + " review");
  }
  else {
    $(".total").html(numReviews + " reviews");
  }
}

function deleteReview(event) {
  $(event.target).parent().remove();
  numReviews = $(".list-group-item").length;
  $(".total").html(numReviews + " reviews")
}
