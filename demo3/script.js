var username="Fred";
document.onclick=
function(evt) {
		makeOneCircle(evt);
}

function makeOneCircle(evt){
	evt = (evt || event)//makes all browzers understand
	//make a new circle
	var newc = document.getElementsByTagName("div");
	document.appendChild(newc);
}