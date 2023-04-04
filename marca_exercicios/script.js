let cep = document.getElementById("cep");

const rua = document.querySelector('#rua');
const estado = document.querySelector('#estado');
const cidade = document.querySelector('#cidade');
const bairro = document.querySelector('#bairro');


function cepF (){
    
    cep.value = cep.value.padStart(8,"0")
    let cepValue =  cep.value.slice(0, 5) + '-' + cep.value.slice(5)


    const cepURL = `https://viacep.com.br/ws/${cepValue}/json/`
    fetch(cepURL)
    .then(cep => cep.json())
    .then(cep => {
        console.log(cep)
        estado.value = cep.uf;
        cidade.value = cep.localidade;
        bairro.value = cep.bairro;
        rua.value = cep.logradouro;
    })
    .catch(erro => {
        console.log("Cep inválido")
        estado.value = 'undefined';
        cidade.value = 'undefined';
        bairro.value = 'undefined';
        rua.value = 'undefined';
    })
    console.log(cepValue);
}

cep.addEventListener("input", function(){
    if(cep.value.length > cep.maxLength){
        cep.value = cep.value.slice(0, cep.maxLength);
    }
    rua.value = '. . .';
    estado.value = '. . .';
    cidade.value = '. . .';
    bairro.value = '. . .';
})

const cards = []

function removeCard(){
    // let element = cards.find()
    // cards.splice(element, 1)
    let parent = this.parentNode
    let index = cards.findIndex(e => e === parent)
    console.log(index)
    if(index >= 0){

        cards.splice(index, 1)
    }
}

document.querySelector('.button').addEventListener('click', (event) =>{
    event.preventDefault()

    let card = document.querySelector('#card')
    let cardText = document.createElement('p')
    let cardContent = document.createElement('div')
    cardContent.classList.add('cards')
    let remove = document.createElement('span')
    let index = cards.length + 1;

    cardText.textContent = cep.value.slice(0, 5) + '-' + cep.value.slice(5)
    remove.textContent = 'X'
    remove.style.color = 'red'
    remove.onclick = removeCard
    cardContent.cardText = cardText
    cardContent.remove = remove
    cardContent.index = index
    cards.push(cardContent)
    cards.map(e =>{
        card.appendChild(e)
        e.appendChild(e.cardText)
        e.appendChild(e.remove)})
    console.log('a')
})








