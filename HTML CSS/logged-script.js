window.onload = () => {
	const savedImg = localStorage.getItem('userimg');
	const navImg = document.getElementById('nav-profile-img');

	if (savedImg && navImg) {
		navImg.src = savedImg
	}
};