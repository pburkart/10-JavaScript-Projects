let div = document.getElementById('timestamp');
function updateTime() {
	let d = new Date();
	let s = d.getSeconds();
	let m = d.getMinutes();
	let h = d.getHours();
	div.innerHTML = h + ":" + m + ":" + s;
}

setInterval(updateTime, 1000);


