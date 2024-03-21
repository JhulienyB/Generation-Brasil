/*1. Faça um algoritmo utilizando laço IF que leia 3 valores inteiros A, B e C e imprima na tela se a
soma de A + B é maior, menor ou igual a C.
    ENTRADA
        Digite o número A: 2
        Digite o número B: 4
        Digite o número C: 5
    SAÍDA
        4 + 2 = 6 > 5
        A Soma de A + B é Maior do que C

*/
const leia = require('readline-sync');
let numA, numB, numC, soma;

numA = leia.questionInt("Digite o número A: ",);
numB = leia.questionInt("Digite o número B: ",);
numC = leia.questionInt("Digite o número C: ",);

soma = numA + numB;

if (soma > numC) {
    console.log(numA, " + ", numB, "=", soma, ">", numC);
    console.log("A Soma de A + B é Maior do que C");
};
if (soma < numC) {
    console.log(numA, " + ", numB, "=", soma, "<", numC);
    console.log("A Soma de A + B é Menor do que C");
};
if (soma == numC) {
    console.log(numA, " + ", numB, "=", soma, "==", numC);
    console.log("A Soma de A + B é Igual do que C");
};
