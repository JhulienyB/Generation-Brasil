/*2.  Escreva um algoritmo utilizando laço IF, que leia um número inteiro via teclado e mostre na tela
uma mensagem indicando se este número é par ou ímpar e se o número é positivo ou
negativo.
    ENTRADA
        Digite um número: 2
    SAÍDA
        O Número 2 é par e positivo!
*/
const leia = require('readline-sync');
let numero;

numero = leia.questionInt("Digite um número: ",);

if ((numero >= 0)&&(numero%2==0)) {
    console.log("O Número "+numero+" é par e positivo!")
} else if ((numero < 0)&&(numero%2==0)) {
    console.log("O Número "+numero+" é par e negativo!")
} else if ((numero >= 0)&&(numero%2==1)) {
    console.log("O Número "+numero+" é impar e positivo!")
} else {
    console.log("O Número "+numero+" é impar e negativo!")
}
