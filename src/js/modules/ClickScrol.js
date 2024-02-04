// Прокрутка при клике

const menuLinks = document.querySelectorAll('.menu__scrol[data-goto]');
export default function clickScrol() {
	if (menuLinks.length) {
		menuLinks.forEach(menuLink => {
			menuLink.addEventListener("click", onMenuLinkClick);
		});
		function onMenuLinkClick(e) {
			e.preventDefault();
			const menuLink = e.target;
			if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
				const gotoBlock = document.querySelector(menuLink.dataset.goto);
				// const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight; fixed
				const gotoBlockValue = gotoBlock.getBoundingClientRect().top - 40;
	
				// if (iconMenu.classList.contains('_active')) {
				// 	document.body.classList.remove('_lock');
				// 	iconMenu.classList.remove('_active');
				// 	menuBody.classList.remove('_active');
				// }
	
				window.scrollTo({
					top: gotoBlockValue,
					behavior: 'smooth'
				});
				e.preventDefault();
			}
		}
	}
}
