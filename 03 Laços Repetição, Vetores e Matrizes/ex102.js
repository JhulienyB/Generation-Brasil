/*2. Elabore um algoritmo que leia 10 números inteiros e armazene em um vetor.
Em seguida, mostre na tela:
    ENTRADA
        Um vetor de 9 posições
    SAIDA
        Elementos nos índices ímpares: 5 3 9 8 6
        Elementos pares: 2 4 8 10 6
        Soma: 55
        Média: 5.50
*/
const leia = require("readline-sync");
let numeros = new Array(9);
let impar = [];
let par = [];
let aux=0, soma = 0, media;

for (let indice = 0; indice < 10; indice++) {
    numeros[indice] = leia.questionInt(`Digite o numero ${indice + 1}: `);
    //pares
    if (numeros[indice] % 2 == 0) {
        par[aux] = numeros[indice]
        aux++;
    }
    //soma
    soma += numeros[indice];
}

//indices impares
console.log("\nElementos nos indices impares:");
for (let indice = 0; indice < numeros.length; indice++) {
    if (indice % 2 == 1)
        console.log(numeros[indice]);
}
//pares
console.log("\nElementos pares:");
for (let indice = 0; indice < par.length; indice++) {
    console.log(par[indice]);
}
//soma
console.log("\nSoma: ", soma);
//media
media = soma / 10;
console.log("\nMedia: ", media);
