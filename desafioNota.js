let nota = 59

let notaA = nota >= 90 
let notaB = nota >= 80 && nota <= 89
let notaC = nota >= 70 && nota <= 79
let notaD = nota >= 60 && nota <= 69
let notaF = nota >= 0 && nota <= 59


if(notaA) {
  console.log('Nota A')
} else if (notaB) {
  console.log('Nota B')
} else if (notaC) {
  console.log('Nota C')
} else if (notaD) {
  console.log('Nota D')
}else if (notaF) {
  console.log('Nota F') 
} else {
  console.log('Nota Inválida')
}

