const cards = [
	{
		marcas: ['buggy', 'chopper'],
		image: 'vaquinha.jpg',
		p1: 'Dr Brian R. Raghav',
		p2: 'Orthodentist',
	},
	{
		marcas: ['enel', 'ace'],
		image: 'vaquinha.jpg',
		p1: 'Dr. Guilherme Torres',
		p2: 'Orthodentist',
	},
	{
		marcas: ['buggy', 'chopper'],
		image: 'vaquinha.jpg',
		p1: 'Dra. Mariana Silva',
		p2: 'Orthodentist',
	},
	{
		marcas: ['enel', 'doffy', 'ace'],
		image: 'vaquinha.jpg',
		p1: 'Dr. Roberto Oliveira',
		p2: 'Orthodentist',
	},
	{
		marcas: ['buggy', 'ace'],
		image: 'vaquinha.jpg',
		p1: 'Dra. Luiza Santos',
		p2: 'Orthodentist',
	},
	{
		marcas: ['ace', 'doffy'],
		image: 'vaquinha.jpg',
		p1: 'Dr. Rafael Castro',
		p2: 'Orthodentist',
	},
	{
		marcas: ['enel'],
		image: 'vaquinha.jpg',
		p1: 'Dra. Ana Luiza Pereira',
		p2: 'Orthodentist',
	},
];
// seleciona a lista e seus elementos
const lista = document.querySelector('.carrossel');
const listaCards = document.querySelector('.doctors');
const itens = lista.querySelectorAll('.carrossel-card');
const search = document.getElementById('search');

function filtraCards(a) {
	const filtro = [];
	const search = document.getElementById('search').value.toLowerCase()
	console.log(search)
	a.classList.toggle('active');
	itens.forEach((item, index) => {
		if (item.classList.contains('active')) {
			filtro.push(item.id);
		}
		return filtro;
	});

	if (filtro.length == 0 && search == '') {
		renderizaCards(cards);
	} else {
		listaCards.innerHTML = '';
		const cardRenderiza = cards.filter((card) => {

			// filtra cards que contem os inputs
			let exists = filtro.find((filter) => card.marcas.includes(filter));
			let existText = card.p1.toLowerCase().includes(search)

			// Inputs vazios recebem true
			if(search.length == 0) existText = true
			if(filtro.length == 0) exists = true
			
				
			console.log(!!exists &&  !!existText);
			// const existText = 
			// search.find(searcher =>{card.p1.includes(searcher)})
			
			return (!!exists &&  !!existText);
		});

        // const newArray = []
        // cards.forEach(card => {
        //     if (filtro.find((filter) => card.marcas.includes(filter)) !== undefined) {
        //         newArray.push(card)
        //     }
        // })  

        // array x array // mapeamento em matriz
		renderizaCards(cardRenderiza);
	}
}

// function array
function renderizaCards(item) {
	listaCards.innerHTML = '';
	item.forEach((card) => {
		// cria tags html
		let div = document.createElement('div');
		let divImage = document.createElement('div');
		let divDescription = document.createElement('div');
		let p1 = document.createElement('p');
		let p2 = document.createElement('p');
		let img = document.createElement('img');
		let marcas = '';

		// set classes e atributos
		card.marcas.forEach((marca) => {
			marcas += `${marca} `;
		});

		p1.textContent = card.p1;
		p2.textContent = card.p2;
		img.setAttribute('src', `./assets/${card.image}`);

		divDescription.append(p1, p2);
		divImage.append(img);

		// renderiza elementos
		divImage.classList.add('doctor-image');
		divDescription.classList.add('doctor-description');
		div.classList.add('card-doctor');
		div.setAttribute('marcas', marcas);
		div.setAttribute('onclick', 'active(this)');

		div.append(divImage, divDescription);
		listaCards.append(div);
	});
}
renderizaCards(cards);

// cria evento de clique em cada item
itens.forEach((item) => {
	item.addEventListener('click', () => {
		// remove a classe caso item clicado já a tenha
		if (item.classList.contains('image-active')) {
			item.classList.remove('image-active');
		} else {
			item.classList.add('image-active');
		}
	});
});

function active(a) {
	if (a.classList.contains('card-aberto')) {
		a.style =
			'animation: 0.25s doctor-card-out cubic-bezier(1, 1, 0, 0) forwards; box-shadow: 0rem 0px 0px 0px rgba(227, 237, 247, 133); transition-time-function: cubic-bezier(1, 1, 0, 0)';
	} else {
		a.style =
			'animation: 0.25s doctor-card-in cubic-bezier(1, 1, 0, 0) forwards; box-shadow: -4rem 0px 0px 0px rgba(227, 237, 247, 133); transition-time-function: cubic-bezier(1, 1, 0, 0)';
	}
	a.classList.toggle('card-aberto');
}
