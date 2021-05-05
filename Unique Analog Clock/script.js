var currentSec = getSecondsToday();
var sec2;

function time() {
	var d = new Date();
	var s = d.getSeconds();
	document.getElementById('digital').innerHTML = (d.getHours() > 12 ? ("0" + d.getHours()).substr(-2) - 12 : ("0" + d.getHours()).substr(-2)) + ":" + (("0" + d.getMinutes()).substr(-2)) + ":" + (("0" + s).substr(-2));
	sec2 = ("0" + s).substr(-2);

	if (sec2 >= 0 && sec2 < 15) {
		for (var i = 45; i < 60; i++) {
			document.getElementById(document.querySelectorAll("section")[i].id).style.display = "none";
		}
		for (var i = 0; i < 15; i++) {
			document.getElementById(document.querySelectorAll("section")[i].id).style.display = "inline";
		}
	} else if (sec2 >= 15 && sec2 < 30) {
		for (var i = 0; i < 15; i++) {
			document.getElementById(document.querySelectorAll("section")[i].id).style.display = "none";
		}
		for (var i = 15; i < 30; i++) {
			document.getElementById(document.querySelectorAll("section")[i].id).style.display = "inline";
		}
	} else if (sec2 >= 30 && sec2 < 45) {
		for (var i = 15; i < 30; i++) {
			document.getElementById(document.querySelectorAll("section")[i].id).style.display = "none";
		}
		for (var i = 30; i < 45; i++) {
			document.getElementById(document.querySelectorAll("section")[i].id).style.display = "inline";
		}
	} else if (sec2 >= 45 && sec2 <= 59) {
		for (var i = 30; i < 45; i++) {
			document.getElementById(document.querySelectorAll("section")[i].id).style.display = "none";
		}
		for (var i = 45; i < 60; i++) {
			document.getElementById(document.querySelectorAll("section")[i].id).style.display = "inline";
		}
	}
}
setInterval(time, 1000);

var t = new Date().getSeconds();
var a = (t != 0) ? a = t : 0;
function time2() {
	var d = new Date();
	var s = d.getSeconds();
	sec2 = ("0" + s).substr(-2);
	if (sec2 === "00") {
		for (var i = 0; i < 60; i++) {
			document.getElementById(document.querySelectorAll(".cl2 > .cc2")[i].id).style.display = "none";
			document.getElementById(document.querySelectorAll(".cl2 > .cc2")[0].id).style.display = "inline !important";
			a = 0;
		}
	} else {
		a++;
		document.getElementById(document.querySelectorAll(".cl2 > .cc2")[a].id).style.display = "inline";
	}
}
setInterval(time2, 1000);

var seconds = (currentSec / 60) % 1;
var minutes = (currentSec / 3600) % 1;
var hours = (currentSec / 43200) % 1;

setTime(60 * seconds, "second");
setTime(3600 * minutes, "minute");
setTime(43200 * hours, "hour");

function setTime(left, hand) {
	$(".clock__" + hand).css("animation-delay", "" + left * -1 + "s");
}

function getSecondsToday() {
	let now = new Date();
	let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
	let diff = now - today;
	return Math.round(diff / 1000);
}
