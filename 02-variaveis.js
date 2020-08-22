// Passo 1 - Váriaveis (let, const, var) e quando utiliar

// Obedece todo e qualquer escopo, é uma boa prática utilizar e pode mudar seu valor.
let let1 = 2;

// Obedece escopo de função e global, boa prática utilizar e não muda o valor inicial.
// Boa prática já iniciar com o seu valor
const pi = 13146;

// Obedece escopo de função e global, não é boa pratica utilizar
var var2;



// Passo 2 - Escopo das váriaveis
console.log(let1);
let1 = 3
{
    let1 = 4
    {
        
        console.log(let1)
    }
}

console.log(pi)
{
    const pi = 15
    console.log(pi)
}

// Passe 3 - Tipagem das váriaveis
// Number - int, float

// String - '', "", ``
console.log('Opa')
console.log("Opa")
console.log(`opa, ${pi}`)
console.log(parseInt('1'))
// Boolean - true e false (0, null, '', undefined)
