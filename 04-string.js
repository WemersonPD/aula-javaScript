// Uma strig (frase), é uma cadeia de caracteres, uma lista de caracteres 
const teste = "Ana vitória Martins Moura"; // Como o computador ler ['A', 'n', 'a', ' ', 'v'] (como é separado) = [0, 1, 2, 3, 4, 5] (indice)

// Tamanho da string
console.log(`Quantidade de caracteres: ${teste.length}`);

// Pegando uma letra pelo indice:
console.log(`Pegando letra 'v': ${teste[4]}`);

// Retorna o indice do caractere
console.log(teste.indexOf('i'));

// Substituindo caracteres
console.log(teste.replace('vitó', 'JavaScript'));

// Quebrando string e fazendo uma lista
console.log(teste.split(' '));

// Transformando string em maiúsculo
console.log(teste.toUpperCase());

// Questão 1 - Transforme a tring para lowerCase (minusculo)

// Transformando uma string em inteiro:
console.log(parseInt('1242'));

// Questão 2 - Transforme de string para float