const despesaFamiliar = {
    receitas: [250.2, 445.8],
    despesas: [199.99, 80.69],
};

function sum(array) {
    let total = 0;
    for (let valor of array) {
        total += valor;
    }

    return total;
}

function calcularBalanço() {
    const calcularReceitas = sum(despesaFamiliar.receitas);
    const calcularDespesas = sum(despesaFamiliar.despesas);

    let total = calcularReceitas - calcularDespesas;

    let balanco = total >= 0;

    let ok = 'negativo';

    if (ok) {
        balanco = 'positivo';
    }

    console.log(`seu saldo é ${balanco}: ${total}`);

    //  if(total >=0){
    //   console.log(`seu saldo é positivo: ${total}`)
    //  } else {
    //   console.log(`seu saldo é negativo: ${total}`)
    //  }
}

calcularBalanço();
