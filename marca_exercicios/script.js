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
    let index = cards.findIndex(e => e.elementP === this.parentNode)
    console.log(this.parentNode, index)
    if(index >= 0){
        cards.splice(index, 1)
    }
    renderizaCards()
}

document.querySelector('.button').addEventListener('click', (event) =>{
    event.preventDefault()

    const cardContent = document.createElement('div')
    cardContent.classList.add('cards')
    const index = cards.length + 1;


    cards.push({
        textCep:cep.value.slice(0, 5) + '-' + cep.value.slice(5),
        elementP:document.createElement('p'),
        textX:'X',
        elementSpan:document.createElement('span'),
        id:index
        
    })
    renderizaCards()
})
function renderizaCards(){
let card = document.querySelector('#card')
card.innerHTML = ''
    cards.map(e =>{
        let indice = cards.findIndex(element => element === e)
        if(indice >= 0){
            e.elementP.textContent = e.textCep
            e.elementSpan.textContent = e.textX
            e.elementSpan.style.color = 'red'
            e.elementSpan.onclick = removeCard
            e.elementSpan.style.marginLeft = '10px'
            e.elementP.append(e.elementSpan)
            card.append(e.elementP)}
        } 
    )
    }

    

        
        







