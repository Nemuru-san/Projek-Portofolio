// hamburger active
const hamburger = document.querySelector('#humberger');
const navMenu = document.querySelector('#navMenu');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('hamburger-active');
	navMenu.classList.toggle('hidden');
});

// navbar fixed
window.onscroll = () => {
	const header = document.querySelector('header');
	const fixNav = header.offsetTop;

	if (window.scrollY > fixNav) {
		header.classList.add('navbar-fixed');
	} else {
		header.classList.remove('navbar-fixed');
	}
};

// test
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
// const pageInfo = document.getElementById('page-info');
const contentItems = document.querySelectorAll('.content-item');

let currentPage = 1;
const itemsPerPage = 4; // Change as needed
const totalItems = contentItems.length;
const totalPages = Math.ceil(totalItems / itemsPerPage);

function showPage(page) {
	contentItems.forEach((item, index) => {
		const start = (page - 1) * itemsPerPage;
		const end = start + itemsPerPage;
		if (index >= start && index < end) {
			item.style.display = 'block';
		} else {
			item.style.display = 'none';
		}
	});
	// pageInfo.textContent = `Page ${page} of ${totalPages}`;
}

prevBtn.addEventListener('click', () => {
	if (currentPage > 1) {
		currentPage--;
		showPage(currentPage);
	}
});

nextBtn.addEventListener('click', () => {
	if (currentPage < totalPages) {
		currentPage++;
		showPage(currentPage);
	}
});

// Show initial page
showPage(currentPage);
