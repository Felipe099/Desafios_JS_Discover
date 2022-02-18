console.log('IDFG');

const avaliacao1 = 8;
const avaliacao2 = 5;
let avaliacaoOptativa;

if (avaliacaoOptativa == undefined) {
    avaliacaoOptativa = -1;
    // console.log(avaliacaoOptativa)
}

function calcularMedia(nota1, nota2, notaOptativa) {
    if (nota1 < nota2) {
        nota1 = nota1 < notaOptativa ? notaOptativa : nota1;
    } else if (nota2 < nota1) {
        nota2 = nota2 < notaOptativa ? notaOptativa : nota2;
    } else if (nota1 == nota2) {
      nota2 = notaOptativa
    }

    const media = (nota1 + nota2) / 2;
    return media;
}

function escreverMensagem(media) {
    if (media >= 6) {
        console.log('Aprovado:', media);
    } else if (media <= 3) {
        console.log('Reprovado:', media);
    } else {
        console.log('Exame:', media);
    }
}



const aluno2 = calcularMedia(9, 1, 0);
escreverMensagem(aluno2)



const aluno1 = calcularMedia(avaliacao1, avaliacao2, avaliacaoOptativa)
escreverMensagem(aluno1)

escreverMensagem(calcularMedia(1,1,2))
