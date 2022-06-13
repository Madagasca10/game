const cardBoard = document.querySelector("#cardboard");
const images = [
	'bat.svg',
	'canguru.svg',
	'cat.svg',
    'lion.svg',
	'scorpion.svg',
	'hawk.svg',
]

let cardHTML = '';//cria o próprio HTML com as imagens

images.forEach(img => {
	cardHTML += `
	<div>
         <img src="img/${img}">
		 <img src="img/js-badge.svg">
	<div>
	`
})

cardBoard.innerHTML = cardHTML;