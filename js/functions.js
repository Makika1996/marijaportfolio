$(document).ready(function () {
  console.log('circle');

  circle($("#test-circle"), 95);
  circle($("#test-circle2"), 70);
  circle($("#test-circle3"), 65);
  circle($("#test-circle4"), 40);

  floatLabels();
})

function circle(el, percent) {
  el.circliful({
    animationStep: 2,
    foregroundBorderWidth: 5,
    backgroundBorderWidth: 0,
    percent: percent,
    foregroundColor: "#edb5bf",
    backgroundColor: "white",
    fillColor: "white"
  });
}

let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {

  mainNav.classList.toggle('active');
});