const leia = require('readline-sync');

/* Elabore um algoritmo que leia 4 notas de um participante em
variáveis do tipo float e exiba na tela a média final do participante.
    ENTRADA
        Nota 1: 10.0
        Nota 2: 8.0
        Nota 3: 7.0
        Nota 4: 7.5
    PROCESSE
        CALCULAR MÉDIA = (NOTA1 + NOTA2 + NOTA3 + NOTA4) / 4
    SAÍDA
        Média final: 8.1
*/

let nota1, nota2, nota3, nota4;

nota1 = leia.questionFloat("\nNota 1: ", );
nota2 = leia.questionFloat("\nNota 2: ", );
nota3 = leia.questionFloat("\nNota 3: ", );
nota4 = leia.questionFloat("\nNota 4: ", );

media = (nota1 + nota2 + nota3 + nota4) / 4;

console.log("O valor float digitado foi: " + media);
