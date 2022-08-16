var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.querySelector(".random");
function genRGB() {
 var r = Math.floor(Math.random() * 255);
 var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
    };
		function returnGradient() {
    var deg =Math.floor(Math.random() * 360);
    return `linear-gradient(${deg}deg,${genRGB()},${genRGB()},${genRGB()})`
  };
setGradient();

function setGradient() {
	body.style.background =
	"linear-gradient(to right, "
	+ color1.value
	+ ", "
	+ color2.value
	+ ")";

	css.textContent = body.style.background + ";";
}
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);


btn.addEventListener('click', function () {
    var gradient = returnGradient();
    document.body.style.background = gradient;

});
