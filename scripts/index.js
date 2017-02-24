var ball = document.querySelector(".discoball");

var classes = ["here", "goes", "our", "awesome", "disco", "ball"];

function goDisco() {
	var random = Math.floor((Math.random() * classes.length));
	ball.setAttribute("class", 'discoball ' + classes[random]);
}

setInterval(goDisco,300);