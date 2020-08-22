// Sobre:
    // Utiliado para evitar a repetição de código.
    // Seu escopo é simple, delimitado por {} e cada "volta" no seu escopo se chama de laço.
    // Bem defino, inicio, fim e como será o passo.
    // Utilizar sempre que é possível identificar a quantidade de laços que será preciso.
    // Controlado por uma váriavel de controle, que informa o inicio e como ela será incrementada/decrementada para chegar ao seu fim.



// Sintaxe:
    // for(inicio; fim; passo) {
        // comandos
    // }

    // inicio: 
        // - Variavel que indica onde o laço irá iniciar.
        // - Boa prática utiliar o let.
        // - Pode ou não ser intanciado dentro do laço - for(let inicio = 0; fim; passo){} ou for(varJaExistente; fim; passo){}
    // fim:
        // - Condição que indica até onde o laço vai.
        // - Exemplo: for(let inicio = 0; inicio < 10; passo) {}
    // passo:
        // - Basicamente como nossa váriavel de controle vai incrementar ou decrementar, para que par do inicio e vá até o fim.
        // - Exemplo: for(let inicio = 0; inicio < 10; inicio++) {}
        // - Exemplo: for(let inicio = 10; inicio > 0; inicio--) {}



// Pratica:
    // 1 - Fazendo um laço de 1 a 10.
    for(let iterador = 1; iterador <= 10; iterador++) {
        console.log(iterador);
    }
    console.log('fim do exemplo 1');

    // 2 - Fazendo laço de 10 a 1.
    for(let itador = 10; itador >= 1; itador--) {
        console.log(itador);
    } 
    console.log('fim do exemplo 2');

    // 3 - Exibindo apenas número pares entre 0 a 10.
    for(let iterador = 0; iterador <= 10; iterador += 2) { //Desta forma poupamos de um if / else.
        console.log(iterador);
    }
    console.log('fim do exemplo 3');

    // 3 - números impares entre 0 a 10 (utilizando if apenas)
    for(let iterador = 0; iterador <= 10; iterador++) {
        if(iterador % 2 !== 0) {
            console.log(iterador);
        }
    }
    console.log('fim do exemplo 4');



// For avançado:
    // Utiliando brake e/ou continue - Sera visto na aula 10 sobre break e continue.
    // Utilizando for..of (Parecido com o for de python) - Será visto na aula 10 sobre lista.
    // Utilizando for..in - Será visto na aula 10 sobre lista.
