let cep = document.getElementById("cep");
function cepF (){
    let rua = document.querySelector('#rua');
    rua.value = '. . .';
    let estado = document.querySelector('#estado');
    estado.value = '. . .';
    let cidade = document.querySelector('#cidade');
    cidade.value = '. . .';
    let bairro = document.querySelector('#bairro');
    bairro.value = '. . .';

    cep.value = cep.value.padStart(8,"0")
    let value =  cep.value.slice(0, 5) + '-' + cep.value.slice(5)
    const cepURL = `https://viacep.com.br/ws/${value}/json/`
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
        estado.value = '';
        cidade.value = '';
        bairro.value = '';
        rua.value = ' ';
    })
    console.log(value);
}

cep.addEventListener("input", function(){
    if(cep.value.length > cep.maxLength){
        
        cep.value = cep.value.slice(0, cep.maxLength);
    }
    let rua = document.querySelector('#rua');
    rua.value = '. . .';
    let estado = document.querySelector('#estado');
    estado.value = '. . .';
    let cidade = document.querySelector('#cidade');
    cidade.value = '. . .';
    let bairro = document.querySelector('#bairro');
    bairro.value = '. . .';
})

/*function maxLength (max) {
    
    if(cep.length > max){
        cep.value = cep.value.slice(0, max)
    }
}*/

//let input = () =>{

//}