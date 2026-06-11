const nameInput = document.getElementById('name-input');
const bioInput = document.getElementById('bio-input');
const fileInput = document.getElementById('file-input');
const saveBtn = document.getElementById('save-btn')


const displayName = document.getElementById('display-name')
const displayBio = document.getElementById('display-bio')
const imgPreview = document.getElementById('profile-img-preview')

window.onload = () => {
	const savedName = localStorage.getItem('userName')
	const savedBio = localStorage.getItem('userBio')
	const savedImg = localStorage.getItem('userImg')

	if (savedName) displayName.innerText = savedName;
	if (savedBio)  displayBio.innerText = savedBio;
	if (savedImg) imgPreview.src = savedImg;
}

saveBtn.addEventListener('click', () => {
	const name = nameInput.value;
	const bio = bioInput.value;

	if (name) {
		displayName.innerText = name;
		localStorage.setItem('userName', name);
	}

	if (bio) {
		displayBio.innerText = bio;
		localStorage.setItem('userBio', bio);
	}

	const file = fileInput.files[0];
	if (file) {
		const reader = new FileReader();
		reader.onload = () => {
			const base64String = reader.result;
			imgPreview.src = base64String;

			localStorage.setItem('userImg', base64String)
			alert("მონაცემები წარმატებით შეინახა!")
		};
		reader.readAsDataUrl(file);
	}


})