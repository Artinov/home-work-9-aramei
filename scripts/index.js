var ball = document.querySelector(".discoball");

var classes = [".here", ".goes", ".our", ".awesome", ".disco", ".ball"];

function goDisco() {
	var random = Math.floor((Math.random() * 5));

	ball.setAttribute("class", classes[random]);
}

setInterval(goDisco,300);

// var els = document.querySelectorAll('.publish_0');
// for (var i=0; i < els.length; i++) {
//     els[i].setAttribute("class", "publish_1");