// Sobre:
    // Utiliado para evitar a repetição de código.
    // Seu escopo é simple, delimitado por {} e cada "volta" no seu escopo se chama de laço.
    // Controlador por uma condição, que enquanto for verdadeiro o laço irá se repetir.
    // Vantagem:
        // Utilizar sempre que não é possível prever a quantidade de laços a serem utiliados.
        // Possibilita a criação de um laço infinito, que como parar com um simples comando break (aula 10)
    // Desvantagem:
        // Fácil de ter problema com laço infinito, possibilitando travamento no sistema.


// Sintaxe:
    // while(condicao){
        // Comandos a serem repetidos por laço
    // }

    // condicao:
        // - Enquanto for verdadeira, o laço irá se repetir.
        // - Geralmente se utiliza uma váriavel iteradora, que diferente do for, é iniciada for do laço
        // - Exemplo: 
        // let iteador = parseInt(prompt("Digite: ")); //pronpt não funciona em nodeJs, apenas na WEB.
        // while(iterador === 10) {
            // console.log(`O iterador vale: ${iterador}`);
            // iterador = parseInt(prompt("Digite: "));//pronpt não funciona em nodeJs, apenas na WEB.
        // }


// Exemplo prático:
    // 1 - Receber um valor X, enquanto 3 < X < 5, mostrar o valor de X.
    let x = 4; //Poderia ser um valor dinâmico
    while(x > 3 && x < 5) {
        console.log(x);
        x = 5
    }
    console.log('Fim do exemplo 1');

    // 2 - Fazer um laço infinito, enquanto X for diferente de 5
    let y = 3; //Poderia ser um valor dinâmico
    while(y != 5) {
        console.log(y);
        y = 5;
    }
    console.log('Fim do exemplo 2');


//  For avançado?
    // Utiliando brake e/ou continue - Sera visto na aula 10 sobre break e continue.
