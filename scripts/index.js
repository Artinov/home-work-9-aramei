var ball = document.querySelector(".discoball");

var classes = ["here", "goes", "our", "awesome", "disco", "ball"];

var i = 0;

//function goDisco() {
//	var random = Math.floor((Math.random() * classes.length));
//	ball.setAttribute("class", "discoball " + classes[random]);
//}

//setInterval(goDisco,300);

function goDiscoTrue() {
		ball.setAttribute("class", "discoball " + classes[i]);
		i++;
		if (i > 5)	{i = 0;}
}

setInterval(goDiscoTrue,300);