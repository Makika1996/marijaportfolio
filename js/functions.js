$(document).ready(function () {
  console.log('circle');

  circle($("#test-circle"), 80);
  circle($("#test-circle2"), 95);
  circle($("#test-circle3"), 60);
  circle($("#test-circle4"), 65);

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