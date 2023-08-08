
let produtos =  [
{imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6Jb9dKcIntVwjLYC1ClftwzO-qE28aeBDjQ&usqp=CAU",nome_do_produto:"teclado mecânico",preco:309.99,entrega_gratis:true,promocao:"350.00",descricao:"Produto em perfeito estado, com switches Cherry MX",marca:"Ichi",condicao:"Novo",categoria:"Teclado"}, 
{imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv6N5wTTLmU_eNwsYtb3UtQ_w8k4CaIkx7bHbNLcEds8Iezyp1BicmpMvyvCYb98fBvy8&usqp=CAU",nome_do_produto:"headset gamer",preco:149.9,entrega_gratis:false,promocao:false,descricao:"Produto inovador, com cancelamento de ruído e microfone removível",marca:"Ni",condicao:"Novo",categoria:"Headset"}, 
{imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGq4WQ_nGsq6MzfYNEOmjhpmDbnNBPXXrZJA&usqp=CAU",nome_do_produto:"jogo ninja Kiwi",preco:89.9,entrega_gratis:true,"promocao":false,descricao:"Produto em perfeito estado, com temática de estratégia medieval",marca:"San",condicao:"Novo",categoria:"Jogo"}, 
{imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-z1Q1KWuHqNU_PKTA12fyqM2HtnqTC9X5kg&usqp=CAU",nome_do_produto:"mouse sem fio",preco:59.99,entrega_gratis:true,promocao:"80.00",descricao:"Produto em perfeito estado, com sensor óptico de alta precisão",marca:"Yon",condicao:"Seminovo",categoria:"Mouse"}, 
{imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6Jb9dKcIntVwjLYC1ClftwzO-qE28aeBDjQ&usqp=CAU",nome_do_produto:"Teclado Gamer",preco:309.99,entrega_gratis:true,promocao:false,descricao:"Produto inovador",marca:"Ichi",condicao:"Novo",categoria:"Teclado"}, 
{imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv6N5wTTLmU_eNwsYtb3UtQ_w8k4CaIkx7bHbNLcEds8Iezyp1BicmpMvyvCYb98fBvy8&usqp=CAU",nome_do_produto:"Headset Bluetooth",preco:"50.00",entrega_gratis:false,promocao:"71.00",descricao:"Produto em perfeito estado",marca:"Ni",condicao:"Seminovo",categoria:"Headset"}, 
{imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGq4WQ_nGsq6MzfYNEOmjhpmDbnNBPXXrZJA&usqp=CAU",nome_do_produto:"Jogo ninja Kiwi",preco:139.9,entrega_gratis:true,promocao:false,descricao:"Produto em perfeito estado",marca:"San",condicao:"Novo",categoria:"Jogo"}, 
{imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-z1Q1KWuHqNU_PKTA12fyqM2HtnqTC9X5kg&usqp=CAU",nome_do_produto:"Mouse Wireless",preco:80,entrega_gratis:false,promocao:"120.50",descricao:"Produto inovador",marca:"Yon",condicao:"Seminovo",categoria:"Mouse"}, 
{imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6Jb9dKcIntVwjLYC1ClftwzO-qE28aeBDjQ&usqp=CAU",nome_do_produto:"Teclado Mecânico",preco:499.99,entrega_gratis:true,promocao:false,descricao:"Produto inovador",marca:"Ichi",condicao:"Novo",categoria:"Teclado"},
{imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv6N5wTTLmU_eNwsYtb3UtQ_w8k4CaIkx7bHbNLcEds8Iezyp1BicmpMvyvCYb98fBvy8&usqp=CAU",nome_do_produto:"Headset Gamer",preco:120,entrega_gratis:false,promocao:"145.90",descricao:"Produto inovador",marca:"Yon",condicao:"Seminovo",categoria:"Headset"}];
let imagem1 = ''

function createElement(element, classe){
  const elemento = document.createElement(element)
  if(classe != undefined) elemento.classList = classe
  return elemento
}

function createImage(src, classe){
  const elemento = createElement('img', classe)
  elemento.src = src
  return elemento
}

function criarListaProdutos(produtos) {
    const cardContainer = createElement('div', "cards-container")

    let listaProdutos = createElement('ul', "row")
  
    // Loop através dos produtos do JSON
    produtos.forEach((produto) => {
    // Cria um elemento de lista
      const itemLista = createElement('li', `card col-4 ${produto.marca} ${produto.condicao} ${produto.categoria}`)
      
      produto.entrega_gratis ? itemLista.classList.add("entrega") : itemLista.classList.add("naoEntrega") 
      produto.promocao ? itemLista.classList.add("promocao") : itemLista.classList.add("semPromocao")

    // Cria elementos HTML para as informações do produto
        const nomeProduto = createElement('h2', "card-title")
        nomeProduto.textContent = produto.nome_do_produto;

        const novoProduto = createElement('span', "card-new")
        
        if(produto.condicao == "Novo") novoProduto.textContent = produto.condicao 
        
        
        const imagemProduto = createImage(produto.imagem, "card-image")

        const precoAntes = createElement('span', 'card-old-price')
        const promocao = document.createElement("span")
        
        if(!!produto.promocao){
          precoAntes.textContent = "R$ " + produto.promocao;
          promocao.classList.add('card-promocao')
          promocao.textContent =  ( 100 - (produto.preco / (produto.promocao / 100))).toFixed(1) + "% OFF";
        }

        
        const rs = createElement('span', 'rs')
        rs.textContent = "R$ " ;

        const precoProduto = createElement('span', 'card-price')
        precoProduto.textContent = produto.preco;
        
        const divPreco = createElement('div', 'divPreco')

        divPreco.append(rs, precoProduto, promocao)

        const marca = createElement('span', 'card-marca')
        marca.textContent = produto.marca;
        
        const entregaG = createElement('span')

        if(produto.entrega_gratis === true){
            entregaG.textContent = "Entrega grátis";
            entregaG.classList.add("card-deliver")
        }

        const descricao = createElement('p', 'card-description')
        descricao.textContent = produto.descricao;

        // Adiciona os elementos HTML criados ao elemento de lista
        itemLista.append(nomeProduto, novoProduto, imagemProduto, precoAntes, divPreco, marca, descricao, entregaG);
        
        // Adiciona o elemento de lista à lista de produtos
        listaProdutos.append(itemLista);
    });
    
    // Adiciona a lista de produtos ao corpo da página
    const cards = document.querySelector("#cards-container")
    cardContainer.appendChild(listaProdutos);
    cards.appendChild(cardContainer);

}

// Chama a função para criar a lista de produtos
criarListaProdutos(produtos);



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
