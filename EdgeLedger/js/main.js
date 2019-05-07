
function initMap() {
const loc = { lat: 42.361145, lng: -71.057083 };
const map = new google.maps.Map(document.querySelector('.map')
,{
    zoom: 14,
    center: loc
});
const marker = new google.maps.Marker({ position: loc, map: map
});
}

window.addEventListener('scroll', function() {
    if (window.scrollY > 60) {
        document.querySelector('#navbar').style.opacity = 0.8;
    } else {
        document.querySelector('#navbar').style.opacity = 1;
    }
})

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a, .btn").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
 
      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 100
      }, 1200, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});