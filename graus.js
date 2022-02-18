function transformDegree(degree) {
    const celsisExist = degree.toUpperCase().includes('C');
    const farenheitExist = degree.toUpperCase().includes('F');

    if (!celsisExist && !farenheitExist) {
        throw new Error('Grau não identificado');
    }

    // Fluxo idela F -> C
    
    let updatedDegree = Number(degree.toUpperCase().replace(/[^0-9]/g, ""));
    let formula = farenheit => ((farenheit - 32) * 5) / 9;
    let degreeSign = 'C';

    if (celsisExist) {
        updatedDegree = Number(degree.toUpperCase().replace(/[^0-9]/g, ""));
        formula = celsius => celsius * 9/5 + 32
        degreeSign = 'F';
    }
    
    return formula(updatedDegree) + degreeSign;
}

try {
    console.log(transformDegree('50af'));
    console.log(transformDegree('10c'));
    console.log(transformDegree('15qwerdgh'));
} catch (error) {
    console.log(error.message);
}

