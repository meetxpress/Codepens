var i = 0;
function move() {
	if (i == 0) {
		i = 1;
		var elem = document.getElementById("pb");
		var txelem = document.getElementById("tx");
		var width = 1;
		var id = setInterval(frame, 1000);
		function frame() {
			if (width >= 100) {
				clearInterval(id);
				elem.removeAttribute("class");
				elem.setAttribute("class", "progress-bar bg-danger");
				i = 0;
			} else {
				//The increament will differ according to the time duration
				width++;
				elem.style.width = width + "%";
				txelem.innerHTML = width;
			}
		}
	}
}
