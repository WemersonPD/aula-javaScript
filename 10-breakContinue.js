// Break - Parar:
    // Interrompe um loop e volta para o escopo anterior.
    // Exemplos (for e while).
        // Exemplo 1 - Interromper laço caso X = 5;
        for(let x = -3; x < 100; x++) {
            if(x === 5) {
                break; //Para o laço de repetição, voltando para o escopo anterior, no caso, o global.
            }
            // Não utilizei else devido o padrão ser retorna o valor de x;
            console.log(x)
        }
        console.log('Final do exemplo 1 \n');

        // Exemplo 2 - Interromper o laço, caso x seja false;
        let x = true;
        while(true) { //Repetição infinita
            if (x === false) {
                break; //Interrompe o laço voltando pro escopo anterior.
            }
            console.log('X ainda é verdadeiro!!');
            x = false;
        }
        console.log('Final exemplo 2 \n');