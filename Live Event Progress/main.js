var i = 0;
function move() { //-------1
	if (i == 0) {
		i = 1;
		var elem = document.getElementById("pb");
		var txelem = document.getElementById("tx");
		
		//-------2, 3
		
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
				//-------4
				elem.style.width = width + "%";
				txelem.innerHTML = width;
			}
		}
	}
}

/* -------------------- To Do--------------------
	1. Pass the event starting time and ending time in the parameter.
		=> to get the duration and convert it into minutes
	2. To get the progress
		=> liveProgress = Current Time - Start Time
	3. To get the overall progress in percentage
		=> overallProgress = liveProgress / durationMin
	4. Finally, assign overallProgress to variable width
                
	Ps. The internal will be of 1000 miniSecs
*/