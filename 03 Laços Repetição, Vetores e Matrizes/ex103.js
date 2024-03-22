/* Elabore um algoritmo que leia uma Matriz 3×3 de números inteiros e em seguida,
mostre na tela:
    ENTRADA
        matriz 3x3
    SAIDA
        Elementos da Diagonal Principal: \
        Elementos da Diagonal Secundária: /
        Soma dos Elementos da Diagonal Principal:
        Soma dos Elementos da Diagonal Secundária:
*/
const leia = require("readline-sync");
let matriz = new Array(3);
for (let indiceLinha = 0; indiceLinha < matriz.length; indiceLinha++){
    matriz[indiceLinha] = Array(3);
}

for (let indiceLinha = 0; indiceLinha < matriz.length; indiceLinha++){
    for (let indiceColuna = 0; indiceColuna < matriz.length; indiceColuna++){
      matriz[indiceLinha][indiceColuna] = leia.questionInt(`Digite o numero do elemento [${indiceLinha}][${indiceColuna}]: `);
    }
}

let somaPrincipal = matriz[0][0] + matriz[1][1] + matriz[2][2];
let somaSecundaria = matriz[0][2] - matriz[1][1] + matriz[2][0];

console.log(`\nElementos da Diagonal Principal: ${matriz[0][0]} ${matriz[1][1]} ${matriz[2][2]}`);
console.log(`\nElementos da Diagonal Secundária: ${matriz[0][2]} ${matriz[1][1]} ${matriz[2][0]}`);
console.log("\nSoma dos Elementos da Diagonal Principal: ", somaPrincipal);
console.log("\nSoma dos Elementos da Diagonal Secundária: ", somaSecundaria);
