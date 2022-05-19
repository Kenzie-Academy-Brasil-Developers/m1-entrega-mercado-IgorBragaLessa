const products = [
  {
    title: "Uva Crimson",
    price: 8.99,
    category: "Frutas",
    image: undefined,
    imageDescription: "Não possui uma imagem definida",
  },
  {
    title: "Banana",
    price: 5.69,
    category: "Frutas",
    image: "./img/products/product_2.svg",
    imageDescription: "Diversos cachos de bananas",
  },
  {
    title: "Mamão",
    price: 4.99,
    category: "Frutas",
    image: "./img/products/product_3.svg",
    imageDescription: "Diversos mamões inteiros",
  },
  {
    title: "Maçã",
    price: 9.2,
    category: "Frutas",
    image: "./img/products/product_4.svg",
    imageDescription: "Uma maçã verde",
  },
  {
    title: "Refrigerante",
    price: 8.99,
    category: "Bebidas",
    image: undefined,
    imageDescription: "Não possui imagem definida",
  },
  {
    title: "Vinho",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_6.svg",
    imageDescription: "Garrafa de Vinho",
  },
  {
    title: "Água Tônica",
    price: 8.99,
    category: "Bebidas",
    image: undefined,
    imageDescription: "Não possui imagem definida",
  },
  {
    title: "Água de coco",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_8.svg",
    imageDescription: "Diversos cocos",
  },

  {
    title: "Sabonete",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_9.svg",
    imageDescription: "Duas barras de sabão",
  },

  {
    title: "Detergente",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_10.svg",
    imageDescription: "Um vidro de detergente",
  },

  {
    title: "Limpa superfícies",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_11.svg",
    imageDescription: "Frasco de limpa surperfícies",
  },

  {
    title: "Lustra Móveis",
    price: 8.99,
    category: "Higiene",
    image: undefined,
    imageDescription: "Não possui imagem difinda",
  },
];

const body = document.querySelector('body')
const h1Frutas = document.createElement('h1')
h1Frutas.innerText = 'Frutas'
h1Frutas.className = 'h1Frutas'
const h1Bebidas = document.createElement('h1')
h1Bebidas.innerText = 'Bebidas'
h1Bebidas.className = 'h1Bebidas'
const h1Higiene = document.createElement('h1')
h1Higiene.innerText= 'Higiene'
h1Higiene.className = 'h1Higiene'

let arrayFrutas = []
let arrayBebidas = []
let arrayHigiene = []

function produtos(ordemEscolhida){
  for(let i = 0; i < ordemEscolhida.length; i++){
    if(ordemEscolhida[i].category == "Frutas"){
      arrayFrutas.push(ordemEscolhida[i])
    }
    else if(ordemEscolhida[i].category == "Bebidas"){
      arrayBebidas.push(ordemEscolhida[i])
    }
    else if(ordemEscolhida[i].category == "Higiene"){
      arrayHigiene.push(ordemEscolhida[i])
    }
  }
}
produtos(products)

const main = document.createElement('main')
main.className = 'container'
const section = document.createElement('section')
section.className = 'products-section'
const mainFrutas = document.createElement('main')
mainFrutas.className = 'products-content fruits'
const mainBebidas = document.createElement('main')
mainBebidas.className = 'products-content drinks'
const mainHigiene = document.createElement('main')
mainHigiene.className = 'products-content hygiene'

const ulFrutas = document.createElement('ul')
const ulBebidas = document.createElement('ul')
const ulHigiene = document.createElement('ul')

function acrescentandoFrutas(acressimoFrutas){
  for(let i = 0; i < acressimoFrutas.length; i++){
    const liFrutas = document.createElement('li')
    liFrutas.className = 'product'

    const imgFrutas = document.createElement('img')
    imgFrutas.className = 'product-img'

    if(acressimoFrutas[i].image == undefined){
      imgFrutas.src = './img/products/no-img.svg'
    }
    else{
      imgFrutas.src = acressimoFrutas[i].image
    }

    const mainDescricaoFrutas = document.createElement('main')
    mainDescricaoFrutas.className = 'product_main'

    const h1NomeFruta = document.createElement('h1')
    h1NomeFruta.className = 'product-title'
    h1NomeFruta.innerText = acressimoFrutas[i].title

    const h5CategoryFruta = document.createElement('h5')
    h5CategoryFruta.className = 'product-category'
    h5CategoryFruta.innerText = acressimoFrutas[i].category

    const strongFrutas = document.createElement('strong')
    strongFrutas.className = 'product-price'
    strongFrutas.innerText = acressimoFrutas[i].price
    liFrutas.appendChild(imgFrutas)
    liFrutas.appendChild(mainDescricaoFrutas)
    mainDescricaoFrutas.appendChild(h1NomeFruta)
    mainDescricaoFrutas.appendChild(h5CategoryFruta)
    mainDescricaoFrutas.appendChild(strongFrutas)
    ulFrutas.appendChild(liFrutas)
  }
}
acrescentandoFrutas(arrayFrutas)
mainFrutas.appendChild(ulFrutas)
section.appendChild(h1Frutas)
section.appendChild(mainFrutas)

function acrescentandoBebidas(acressimoBebidas){
  for(let i = 0; i < acressimoBebidas.length; i++){
    const liBebidas = document.createElement('li')
    liBebidas.className = 'product'

    const imgBebidas = document.createElement('img')
    imgBebidas.className = 'product-img'
    if(acressimoBebidas[i].image == undefined){
      imgBebidas.src = './img/products/no-img.svg'
    }
    else{
      imgBebidas.src = acressimoBebidas[i].image
    }

    const mainDescricaoBebidas = document.createElement('main')
    mainDescricaoBebidas.className = 'product_main'

    const h1NomeBebida = document.createElement('h1')
    h1NomeBebida.className = 'product-title'
    h1NomeBebida.innerText = acressimoBebidas[i].title

    const h5CategoryBebida = document.createElement('h5')
    h5CategoryBebida.className = 'product-category'
    h5CategoryBebida.innerText = acressimoBebidas[i].category

  
    const strongBebidas = document.createElement('strong')
    strongBebidas.className = 'product-price'
    strongBebidas.innerHTML = acressimoBebidas[i].price

    liBebidas.appendChild(imgBebidas)
    liBebidas.appendChild(mainDescricaoBebidas)
    mainDescricaoBebidas.appendChild(h1NomeBebida)
    mainDescricaoBebidas.appendChild(h5CategoryBebida)
    mainDescricaoBebidas.appendChild(strongBebidas)
    ulBebidas.appendChild(liBebidas)
  }
}
acrescentandoBebidas(arrayBebidas)
mainBebidas.appendChild(ulBebidas)
section.appendChild(h1Bebidas)
section.appendChild(mainBebidas)

function acrescentandoHigiene(acressimoHigiene){
  for(let i = 0; i < acressimoHigiene.length; i++){
    const liHigiene = document.createElement('li')
    liHigiene.className = 'product'

    const imgHigiene = document.createElement('img')
    imgHigiene.className = 'product-img'
    if(acressimoHigiene[i].image == undefined){
      imgHigiene.src = './img/products/no-img.svg'
    }
    else{
      imgHigiene.src = acressimoHigiene[i].image
    }

    const mainDescricaoHigiene = document.createElement('main')
    mainDescricaoHigiene.className = 'product_main'

    const h1NomeHigiene = document.createElement('h1')
    h1NomeHigiene.className = 'product-title'
    h1NomeHigiene.innerText = acressimoHigiene[i].title

    const h5CategoryHigiene = document.createElement('h5')
    h5CategoryHigiene.className = 'product-category'
    h5CategoryHigiene.innerText = acressimoHigiene[i].category

    const strongHigiene = document.createElement('strong')
    strongHigiene.className = 'product-price'
    strongHigiene.innerText = acressimoHigiene[i].price

    liHigiene.appendChild(imgHigiene)
    liHigiene.appendChild(mainDescricaoHigiene)
    mainDescricaoHigiene.appendChild(h1NomeHigiene)
    mainDescricaoHigiene.appendChild(h5CategoryHigiene)
    mainDescricaoHigiene.appendChild(strongHigiene)
    ulHigiene.appendChild(liHigiene)
  }
}
acrescentandoHigiene(arrayHigiene)
mainHigiene.appendChild(ulHigiene)
section.appendChild(h1Higiene)
section.appendChild(mainHigiene)


main.appendChild(section)
body.appendChild(main)
