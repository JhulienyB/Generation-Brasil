/*5. Escreva um algoritmo, que leia números inteiros via teclado, 
até que o número zero seja digitado. Ao final, mostre na tela a soma 
de todos os números digitados, que sejam positivos.
    ENTRADA
        Digite um número:
    SAÍDA
        A soma dos números positivos é: 
*/

const leia = require('readline-sync');
let numero, soma=0;

do {
    numero = leia.questionInt("Digite um numero (para sair do programa digite zero): : ",);

    if (numero>=0) {
        soma += numero;
    }
} while (numero != 0);

console.log("A soma dos números positivos é: ", soma);
