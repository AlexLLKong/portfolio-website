let btnArray = {}
let iconArray = {}
let fixedBurger
function addTransitionClasses() {
	for (let i = 0; i < btnArray.length; i++) {
		btnArray[i].classList.add('burger-btn-transition')
		iconArray[i].classList.add('fa-10x', 'icon-transition-post')
	}
	fixedBurger.removeEventListener('click', addTransitionClasses)
	addRemoveBtnListener()
}

function removeClassesFromButtons() {
	for (let i = 0; i < btnArray.length; i++) {
		btnArray[i].classList.remove('burger-btn-transition')
		iconArray[i].classList.remove('fa-10x', 'icon-transition-post')
	}
	addTransitionClassListener()
}

function addTransitionClassListener() {
	fixedBurger.addEventListener('click', addTransitionClasses)
}

function addRemoveBtnListener() {
	fixedBurger.addEventListener('click', removeClassesFromButtons)
}

window.onload = () => {
	fixedBurger = document.querySelector('.fixed-burger')
	btnArray = document.querySelectorAll('.burger-btn')
	iconArray = document.querySelectorAll('.icon-transition-def')
	for (let i = 0; i < btnArray.length; i++) {
		btnArray[i].addEventListener('click', removeClassesFromButtons)
	}
	addTransitionClassListener()
}
