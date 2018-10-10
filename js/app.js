document.addEventListener("DOMContentLoaded", () => {

	var hamburger = document.querySelector('.hamburger');

	hamburger.addEventListener('click', function() {
		this.classList.toggle('open')
	});

})
