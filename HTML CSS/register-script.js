const registerForm = document.getElementById('register-form');

registerForm.addEventListener('submit',
	(e) => {
		e.preventDefault();

		const name = document.getElementById('reg-name').value;
		const email = document.getElementById('reg-email').value
		const password = document.getElementById('reg-password').value;

		localStorage.setItem('userName', name);
		localStorage.setItem('userEmail', email);
		localStorage.setItem('userPassword', password)

		alert("რეგისტრაცია წარმატებით დასრულდა!")

		window.location.href = 'profile.html';
	});