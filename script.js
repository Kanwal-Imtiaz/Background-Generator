var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");


function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";"; 
	/* css.innerHtml , css.createTextNode */
}

/* we can add event : (onclick, oninput, etc) attribute within input html tag and set our function 
rather than adding listner in javascript file*/
/* we can add/hook different multiple events on a single item in javascript file 
but only one event in html */

/*color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);*/