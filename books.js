const booksByCategory = [
    {
        category: 'Riqueza',
        books: [
            {
                title: 'Os segredos da mente milionária',
                author: 'T. Harv Eker',
            },
            {
                title: 'O homrm mais rico da babilônia',
                author: 'George S. Clason',
            },

            {
                title: 'Pai rico, pai pobre',
                author: 'Robert T. Kiyosaki e Sharon L. Lechter',
            },
        ],
    },
    {
        category: 'Inteligência Emocional',
        books: [
            {
                title: 'Você é Insubstituível',
                author: 'August Cury',
            },
            {
                title: 'Ansiedade - Como enfrentar o mal do século',
                author: 'August Cury',
            },

            {
                title: 'Os 7 hábitos das pessoas altamente eficazes',
                author: 'Stephen R. Covey',
            },
        ],
    },
];

const totalCategories = booksByCategory.length;
console.log(totalCategories);

for (let category of booksByCategory) {
    console.log(`total de livros da categoria:`, category.category);
    console.log(category.books.length);
}

function countAuthors() {
  let authors = []

  for(let category of booksByCategory) {
    for(let book of category.books) {
      if(authors.indexOf(book.author) == -1){
        authors.push(book.author)
      }
    }

  }
  console.log(`total de autores:`,authors.length)
}

countAuthors()

function mostrarLivros() {
  let books = []

  for(let category of booksByCategory) {
    for(let book of category.books) {
      if(book.author === 'August Cury'){
        books.push(book.title)
      }
    }

  }
  console.log(`total de livros do August Cury:`,books)
}

mostrarLivros()

function livrosAuthors(author) {
  let books = []

  for(let category of booksByCategory) {
    for(let book of category.books) {
      if(book.author === author){
        books.push(book.title)
      }
    }

  }
  console.log(`total de livros do ${author}: ${books.join(", ")}`)
}

livrosAuthors('August Cury')

function lance(carga) {
    let dias = carga * 8;
    return dias;
}

let result = lance(89);
console.log(`valor pago por dia: ${result} reais`);

function dias(orcamento, valor) {
    let saldo = valor * 8;
    let dia = orcamento / saldo;
    return dia;
}

let gasto = dias(20000, 89).toFixed(0);
console.log(`dias que pode trabalha com esse orçamento: ${gasto} dias`);


function priceWithMonthlyDiscount(preco, dias, desconto ) {
  let saldo = preco * 8 // 712
  let diasFaturados = 22 // dias uteis
  let valorMes = saldo * diasFaturados // 15.664
  let percentual = valorMes * desconto // 6.578,88
  let porMes = valorMes - percentual // 9.089,12
  let projeto = dias / diasFaturados // 10.4545
  
  let total = porMes * projeto
  return total
  
  
}

let result = priceWithMonthlyDiscount(89, 230, 0.42)
console.log(result)
console.log(Math.round(result))