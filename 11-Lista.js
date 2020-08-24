// Sobre
let frutas = ['maça', 'banana'];
    // É uma estrutura indexada.
        // ['maça', 'banana']
        // [  0,       1]
    // (Boa prática) Todos os elementos devem ser do mesmo tipo.
        // ['a', 'b', 'c']
        // [1, 2, 3]
        // [[], [], []]
        // [{}. {}, {}] //Objeto, ainda não visto.
    // Uma é uma lista de caraccteres.
    // Possivel salvar varias variáveis de uma vez
        //Exemplo:    
            // let [a, b, c] = ['ola', 'mundo', '123'] //Cada uma será uma variável como qualquer outra.
            // console.log(a, b, c)

// Sintaxe:
    // Toda lista é delimita por [].


// Metodos:
    // Pegar a quantidade de elemtos do array.
    console.log(frutas.length)

    // Atualiza a lista e adicionar um valor ao final.
    frutas.push('Morango');
    console.log(frutas);

    // Atualiza a lista e remove um valor no final.
    frutas.pop();
    console.log(frutas);

    // Acessar elemto do lista por indice.
    console.log(frutas[1]); //Acessando o primeiro elemento da lista

    // Acessar indice do elemtno da lista por valor.
    console.log(frutas.indexOf('banana'));

    // Acessar o último elemento da lista pelo seu indice.
    console.log(frutas[frutas.length -1]);

    // Pegar elementos de x a y.
    console.log(frutas.slice(0, 1)); //slice(inicio], fim[)

    // Remover elemento pelo indice.
    let posicao = frutas.indexOf('maça'); //Pegando o elemento pela posição
    // splice(pos, quantidade) //Posição do elemento que será deletado, quantidade de elementos a serem deletados a partir da posição inicial informada
    frutas.splice(posicao, 1); //Remove o elemento pelo indice que pegamos no passo anterior, informando quantos elementos iramos excluir.
    console.log(frutas);

    // Copiar array
    frutas = ['maça', 'banana'];
    let copia = frutas.slice() //Como não informamos elementos 
    console.log(`Lista copia: ${copia}\n`)


// Prática:
    frutas = ['maça', 'banana', 'morango', 'manga'];
    
    // 1 - Percorrendo um array e listando todos os seus elementos (for..of)
    // Obs: Seria melhor utilizar o forEach (aula 12)
    for(let fruta of frutas) {
        console.log(`Fruta: ${fruta}`);
    }
    console.log('Fim do exemplo 1 \n');

    // 2 - Pegando os indices da lista (for..in)
    // Obs: Seria melhor utilizar o forEach (aula 12)
    for (let indiceFruta in frutas) {
        console.log(`Indice da fruta ${frutas[indiceFruta]} é ${indiceFruta}`)
    }
    console.log('Fim do exemplo 2 \n');

    // 3 - Criando uma lista que guarde números de 1 a 10
    let sequencia = [];
    for(let numero = 1; numero <= 10; numero++) {
        sequencia.push(numero);
    }
    console.log(sequencia);
    console.log('Fim do exemplo 3 \n');



// Lista avançada:
    // - Percorrendo uma lista com forEach, aula 12 sobre funções.
    // - Selecionar apenas o que queremos com filter(), aula 12 sobre funções.
    // - Maṕear uma lista e alterar elementos especificos com map(), aula 12 sobre funções.
    // - Reduzir a lista a apenas um elementos com reduce(), aula 12 sobre funções.
    // - Percorrendo um lista de objetos e pegando alguma propriedade especifica, aula 13 sobre objetos.
