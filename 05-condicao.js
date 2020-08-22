// Tipos:
// if (simples), if com else (composta), if com else if e else (aninhada)

const anaVitoria = 10;

// Apenas if
if(anaVitoria == 10) {
    console.log('É igual a 10')
}

// If com else (Composta)
if(anaVitoria == 9) {
    console.log('Igual a 9');
}else {
    console.log('Não é igual a 9');
}


// If com else if e else (aninhada)
if(anaVitoria == 11) {
    console.log('É igual a 11');
}else if(anaVitoria == 12) {
    console.log('É igual a 12');
}else if(anaVitoria == 15) {
    console.log('É igual a 15');
}else {
    console.log('Nenhuma das opções anteriores.');
}


// Operador ternário:
const veia = anaVitoria == 11 ? 'É sim': 'Não é';
console.log(veia);