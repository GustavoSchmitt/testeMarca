// seleciona a lista e seus elementos
const lista = document.querySelector('.carrossel');
const itens = lista.querySelectorAll('.carrossel-card');

// cria evento de clique em cada item
itens.forEach((item) => {
  item.addEventListener('click', () => {
    // remove a classe caso item clicado já a tenha
    if(item.classList.contains('image-active')){
      item.classList.remove('image-active');

    }else{
        // remove a classe de todos os itens
        itens.forEach((item) => {
          item.classList.remove('image-active');
        });
        // adiciona a classe apenas no item clicado
        item.classList.add('image-active');
        console.log(item)
    }
  });
});

function active(a){
    if(a.classList.contains('card-aberto')){
    
    a.style = 'animation: 0.25s doctor-card-out cubic-bezier(1, 1, 0, 0) forwards; box-shadow: 0rem 0px 0px 0px rgba(227, 237, 247, 133); transition-time-function: cubic-bezier(1, 1, 0, 0)'
    }else{
        a.style = 'animation: 0.25s doctor-card-in cubic-bezier(1, 1, 0, 0) forwards; box-shadow: -4rem 0px 0px 0px rgba(227, 237, 247, 133); transition-time-function: cubic-bezier(1, 1, 0, 0)'

    }
    a.classList.toggle('card-aberto')
}