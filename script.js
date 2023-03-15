
let produtos = '{"produtos": ['+ 
'{"imagem":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6Jb9dKcIntVwjLYC1ClftwzO-qE28aeBDjQ&usqp=CAU","nome_do_produto":"teclado mecânico","preco":309.99,"entrega_gratis":true,"promocao":"350.00","descricao":"Produto em perfeito estado, com switches Cherry MX","marca":"Ichi","condicao":"Novo","categoria":"Teclado"},' + 
'{"imagem":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv6N5wTTLmU_eNwsYtb3UtQ_w8k4CaIkx7bHbNLcEds8Iezyp1BicmpMvyvCYb98fBvy8&usqp=CAU","nome_do_produto":"headset gamer","preco":149.9,"entrega_gratis":false,"promocao":false,"descricao":"Produto inovador, com cancelamento de ruído e microfone removível","marca":"Ni","condicao":"Novo","categoria":"Headset"},' + 
'{"imagem":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGq4WQ_nGsq6MzfYNEOmjhpmDbnNBPXXrZJA&usqp=CAU","nome_do_produto":"jogo ninja Kiwi","preco":89.9,"entrega_gratis":true,"promocao":false,"descricao":"Produto em perfeito estado, com temática de estratégia medieval","marca":"San","condicao":"Novo","categoria":"Jogo"},' + 
'{"imagem":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-z1Q1KWuHqNU_PKTA12fyqM2HtnqTC9X5kg&usqp=CAU","nome_do_produto":"mouse sem fio","preco":59.99,"entrega_gratis":true,"promocao":"80.00","descricao":"Produto em perfeito estado, com sensor óptico de alta precisão","marca":"Yon","condicao":"Seminovo","categoria":"Mouse"},' + 
'{"imagem":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6Jb9dKcIntVwjLYC1ClftwzO-qE28aeBDjQ&usqp=CAU","nome_do_produto":"Teclado Gamer","preco":309.99,"entrega_gratis":true,"promocao":false,"descricao":"Produto inovador","marca":"Ichi","condicao":"Novo","categoria":"Teclado"},' + 
'{"imagem":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv6N5wTTLmU_eNwsYtb3UtQ_w8k4CaIkx7bHbNLcEds8Iezyp1BicmpMvyvCYb98fBvy8&usqp=CAU","nome_do_produto":"Headset Bluetooth","preco":"50.00","entrega_gratis":false,"promocao":"71.00","descricao":"Produto em perfeito estado","marca":"Ni","condicao":"Seminovo","categoria":"Headset"},' + 
'{"imagem":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGq4WQ_nGsq6MzfYNEOmjhpmDbnNBPXXrZJA&usqp=CAU","nome_do_produto":"Jogo ninja Kiwi","preco":139.9,"entrega_gratis":true,"promocao":false,"descricao":"Produto em perfeito estado","marca":"San","condicao":"Novo","categoria":"Jogo"},' + 
'{"imagem":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-z1Q1KWuHqNU_PKTA12fyqM2HtnqTC9X5kg&usqp=CAU","nome_do_produto":"Mouse Wireless","preco":80,"entrega_gratis":false,"promocao":"120.50","descricao":"Produto inovador","marca":"Yon","condicao":"Seminovo","categoria":"Mouse"},' + 
'{"imagem":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6Jb9dKcIntVwjLYC1ClftwzO-qE28aeBDjQ&usqp=CAU","nome_do_produto":"Teclado Mecânico","preco":499.99,"entrega_gratis":true,"promocao":false,"descricao":"Produto inovador","marca":"Ichi","condicao":"Novo","categoria":"Teclado"},'+ 
'{"imagem":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv6N5wTTLmU_eNwsYtb3UtQ_w8k4CaIkx7bHbNLcEds8Iezyp1BicmpMvyvCYb98fBvy8&usqp=CAU","nome_do_produto":"Headset Gamer","preco":120,"entrega_gratis":false,"promocao":"145.90","descricao":"Produto inovador","marca":"Yon","condicao":"Seminovo","categoria":"Headset"}' + ']}';
let imagem1 = ''

let produtosObj=JSON.parse(produtos);
console.log(produtosObj);

function criarListaProdutos(produtos) {
    let cardContainer = document.createElement("div");
    cardContainer.classList.add("cards-container");
    let listaProdutos = document.createElement('ul');
    listaProdutos.classList.add("row")
  
    // Loop através dos produtos do JSON
    produtos.produtos.forEach((produto) => {
    // Cria um elemento de lista
        let itemLista = document.createElement('li');
        itemLista.classList.add("card")
        itemLista.classList.add("col-4")
        itemLista.classList.add(produto.marca)
        itemLista.classList.add(produto.condicao)
        itemLista.classList.add(produto.categoria)
        
        if(produto.entrega_gratis === true){
            itemLista.classList.add("entrega")      
        }else{
            itemLista.classList.add("naoEntrega")
        }
        if(produto.promocao != false){
            itemLista.classList.add("promocao")
        }else{
            itemLista.classList.add("semPromocao")
        }

    // Cria elementos HTML para as informações do produto
        let nomeProduto = document.createElement('h2');
        nomeProduto.textContent = produto.nome_do_produto;
        nomeProduto.classList.add("card-title")

        let novoProduto = document.createElement('span')
        if(produto.condicao == "Novo"){
          novoProduto.textContent = produto.condicao 
        }
        novoProduto.classList.add('card-new')
  
        let imagemProduto = document.createElement('img');
        imagemProduto.src = produto.imagem;
        imagemProduto.classList.add("card-image");

        let precoAntes = document.createElement("span");
        let promocao = document.createElement("span")
        if(produto.promocao != false){
            precoAntes.textContent = "R$ " + produto.promocao;
            promocao.classList.add('card-promocao')
            promocao.textContent =  ( 100 - (produto.preco / (produto.promocao / 100))).toFixed(1) + "% OFF";
        }
        precoAntes.classList.add('card-old-price')
        
        
        let rs = document.createElement('span');
        rs.textContent = "R$ " ;
        rs.classList.add('rs')

        let precoProduto = document.createElement('span');
        precoProduto.textContent = produto.preco;
        precoProduto.classList.add("card-price");
        //precoProduto.classList.add('col-6')
        
        let divPreco = document.createElement('div');
        divPreco.classList.add('divPreco')
        divPreco.appendChild(rs)
        divPreco.appendChild(precoProduto);
        divPreco.appendChild(promocao)

        let marca = document.createElement('span');
        marca.textContent = produto.marca;
        marca.classList.add("card-marca");
        
        let entregaG = document.createElement('span');
        if(produto.entrega_gratis === true){
            entregaG.textContent = "Entrega grátis";
            entregaG.classList.add("card-deliver")
        }
        let descricao = document.createElement('p');
        descricao.textContent = produto.descricao;
        descricao.classList.add("card-description");

        // Adiciona os elementos HTML criados ao elemento de lista
        itemLista.appendChild(nomeProduto);
        itemLista.appendChild(novoProduto);
        itemLista.appendChild(imagemProduto);
        itemLista.appendChild(precoAntes);
        
        itemLista.appendChild(divPreco);
        itemLista.appendChild(marca);
        itemLista.appendChild(descricao)
        itemLista.appendChild(entregaG);
        
        // Adiciona o elemento de lista à lista de produtos
        listaProdutos.appendChild(itemLista);
    });
    
    // Adiciona a lista de produtos ao corpo da página
    let cards = document.querySelector("#cards-container")
    cardContainer.appendChild(listaProdutos);
    cards.appendChild(cardContainer);

}

// Chama a função para criar a lista de produtos
criarListaProdutos(produtosObj);


// Entrega grátis
// var checkboxes = document.querySelectorAll('input[type=checkbox]');
// checkboxes.forEach(function(checkbox) {
//     checkbox.addEventListener('change', function() {
    
//     var itens = document.querySelectorAll('.card');
//     // percorre todos os itens e verifica se têm a classe selecionada
//     itens.forEach(function(item) {
//       if (checkbox.checked && !item.classList.contains(checkbox.value)) {
//           // esconde o item se o checkbox estiver marcado e ele não tiver a classe selecionada
//           item.style.display = 'none';
//         } else {
//             // mostra o item se o checkbox não estiver marcado ou ele tiver a classe selecionada
//             item.style.display = '';
//     }}
//     )
//     })
// })

const marcas = document.querySelectorAll('.marca');
const entregas = document.querySelectorAll('.entregas');
const promocoes = document.querySelectorAll('.promocao');
const condicoes = document.querySelectorAll('.condicao');
const categorias = document.querySelectorAll('.categorias');
const precoMin = document.querySelector('.min');
const precoMax = document.querySelector('.max');
const itens = document.querySelectorAll('.card');
const itensPreco = document.querySelectorAll('.card-price');
const itensPesquisa = document.querySelectorAll('.card-title');
const pesquisa = document.querySelector('.pesquisa')

const marcaTodos = document.querySelectorAll('input[type=checkbox]');

const classesMarca = [];
const classesEntrega = [];
const classesPromocao = [];
const classesCondicao = [];
const classesCategoria = [];
const classesPreco = [];
let classesPesquisa = [];
let a = 0;
let b = 0;

function filtrarPesquisa(){

  //-----------------------------------------  Pesquisa  -----------------------------------------
  a = 0;
  itensPesquisa.forEach(function(itemPesquisa){
    classesPesquisa.push(itemPesquisa.textContent)
  });
  //-----------------------------------------  Preço  -----------------------------------------
  itensPreco.forEach(function(itemPreco){
    classesPreco.push(parseInt(itemPreco.textContent))
    
  })
  let verifyPreco;
  if(precoMax.value >= classesPreco[b] && classesPreco[b] >= precoMin.value){
    verifyPreco = true
  }else{
    verifyPreco = false
  }

  //-----------------------------------------  Categoria  -----------------------------------------
// Para cada filtro
if(!categorias.checked){
  classesCategoria.pop()
}
categorias.forEach(function(categoria) {
  if (categoria.checked) {
    classesCategoria.push(categoria.value);
  }
});

  //-----------------------------------------  Condição  -----------------------------------------
  // Para cada filtro

  if(!condicoes.checked){
    classesCondicao.pop()
  }
  condicoes.forEach(function(condicao) {
    if (condicao.checked) {
      classesCondicao.push(condicao.value);
    }else{
      classesEntrega.pop(0)
    }
  });
  //-----------------------------------------  Promoção  -----------------------------------------
  // Para cada filtro
  if(!promocoes.checked){
    classesPromocao.pop()
  }
  promocoes.forEach(function(promocao) {
    if (promocao.checked) {
      classesPromocao.push(promocao.value);
    }
  });

  //-----------------------------------------  Entrega  -----------------------------------------
  if(!entregas.checked){
    classesEntrega.pop()
  }
  entregas.forEach(function(entrega) {
    if (entrega.checked) {
      classesEntrega.push(entrega.value);
    }
  });

  //-----------------------------------------  Marca  -----------------------------------------
  if(!marcas.checked){
    classesMarca.pop()
  }
  marcas.forEach(function(marca) {
    if (marca.checked) {
      classesMarca.push(marca.value);
    }
  });

  //-----------------------------------------  Verificação  -----------------------------------------
  itens.forEach(function(item){
    
    
    // Categoria  -----------------------------------
    const classesItemCategoria = item.classList;
    let exibirItemCategoria = false;

    classesCategoria.forEach(function(classeFiltro) {
      if (classesItemCategoria.contains(classeFiltro)) {
        exibirItemCategoria = true;
      }
    });
    //------------------------------------------------

    // Condição  -----------------------------------
    const classesItemCondicao = item.classList;
    let exibirItemCondicao = false;
    
    classesCondicao.forEach(function(classeFiltro) {
      if (classesItemCondicao.contains(classeFiltro)) {
        exibirItemCondicao = true;
      }
    });
    //------------------------------------------------

    // Promoção  -----------------------------------
    const classesItemPromo = item.classList;
    let exibirItemPromo = false;
   
    classesPromocao.forEach(function(classeFiltro) {
      if (classesItemPromo.contains(classeFiltro)) {
        exibirItemPromo = true;
      }
    });
    //------------------------------------------------
    // Entrega  -----------------------------------
    const classesItemEntrega = item.classList;
    let exibirItemEntrega = false;
    

    classesEntrega.forEach(function(classeFiltro) {
      if (classesItemEntrega.contains(classeFiltro)) {
        exibirItemEntrega = true;
      }
    });
    //------------------------------------------------
    // Marca  -----------------------------------
    const classesItemMarca = item.classList;
    let exibirItemMarca = false;
    classesMarca.forEach(function(classeFiltro) {
      if (classesItemMarca.contains(classeFiltro)) {
        exibirItemMarca = true;
      }
    });



    //------------------------------------------------

    if(true == classesPesquisa[a].toLowerCase().includes(pesquisa.value.toLowerCase()) &&
    precoMax.value >= classesPreco[b] && classesPreco[b] >= precoMin.value &&
    (exibirItemCategoria || classesCategoria.length == 0 ) &&
    (classesCondicao.length == 0 || exibirItemCondicao) &&
    (classesPromocao.length == 0 || exibirItemPromo) &&
    (classesEntrega.length == 0 || exibirItemEntrega) &&
    (classesMarca.length == 0 || exibirItemMarca)
    ){
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
    a = a + 1;
    b = b + 1;
  })

  
}
