$(document).ready(function () {

  $('.sidenav').sidenav();
  $('.materialboxed').materialbox();
  $('.parallax').parallax();


});

//Scroll to top button
var mybutton = document.getElementById("topBtn");
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
};
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};
