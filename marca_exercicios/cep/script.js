let cep = document.getElementById("cep");

const rua = document.querySelector('#rua');
const estado = document.querySelector('#estado');
const cidade = document.querySelector('#cidade');
const bairro = document.querySelector('#bairro');


function cepValidacao (){
    
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

// VALORES DOS INPUTS AO DIGITAR CEP
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
    let index = cards.findIndex(e => e.div === this.parentNode)
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
    const span = document.createElement('span')

    cards.push({
        div:document.createElement('div'),
        textCep:cep.value.slice(0, 5) + '-' + cep.value.slice(5),
        textRua:rua.value,
        textX:'X',
        elementSpanCep:document.createElement('span'),
        elementSpanRua:document.createElement('span'),
        elementSpanX:span,
        id:index,
        
    })
    renderizaCards()
})

function createTagHtml(tag){
    return document.createElement(tag)
}

function renderizaCards(){
let card = document.querySelector('#card')


card.innerHTML = ' '
cards.map(e =>{
    let indice = cards.findIndex(element => element === e)
    if(indice >= 0){
            let cep = elementSpanCep
            let rua = createTagHtml('span')
            let x = createTagHtml('span')
            cep.textContent = e.textCep
            rua.textContent = e.textRua
            x.textContent = e.textX

            x.style.color = 'red'
            x.onclick = removeCard
            x.style.marginLeft = '10px'

            e.div.append(cep,rua, x)
            e.div.id = e.id
            card.append(e.div)
        }
        } 
    )
    }

    

        
        







