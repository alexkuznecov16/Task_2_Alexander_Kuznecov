// id="menu-open"
// class="mobile-menu
const mobileMenuOpen = document.getElementById('menu-open') // burger-menu open
const mobileMenuBlock = document.getElementsByClassName('mobile-menu')
const mobileMenuClose = document.getElementById('menu-close') // burger-menu close
const hambField = document.getElementsByClassName('header-block')

mobileMenuOpen.addEventListener('click', () => {
	hambField[0].classList.add('open')
	mobileMenuBlock[0].classList.add('open')
	document.body.classList.add('opened')
})

mobileMenuClose.addEventListener('click', () => {
	hambField[0].classList.remove('open')
	mobileMenuBlock[0].classList.remove('open')
	document.body.classList.remove('opened')
})
