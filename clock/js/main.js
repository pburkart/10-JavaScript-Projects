let div = document.getElementById('timestamp');
function updateTime() {
	let d = new Date();
	let s = formatTime(d.getSeconds());
	let m = formatTime(d.getMinutes());
	let h = d.getHours();
	div.innerHTML = h + ":" + m + ":" + s;
}

function formatTime(x) {
	if(x<10){
		x = "0" + x;
	}
	
	return x;
}

setInterval(updateTime, 1000);
