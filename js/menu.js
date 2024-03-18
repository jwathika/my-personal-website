var sidemenu = document.getElementById('sidemenu');
function openmenu() {
	sidemenu.style.right = '0';
}
function closemenu() {
	sidemenu.style.right = '-200px';
}

function vibrate() {
	navigator.vibrate(200);

	document.getElementById('sub').innerText = 'Submitted✔';
}
function del() {
	document.getElementById('del').innerText = 'Cleared❌';
}
