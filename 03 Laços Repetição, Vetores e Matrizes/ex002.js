/*2. Escreva um algoritmo usando laço FOR, que leia 10 números inteiros via teclado
e mostre na tela quantos números são pares e quantos número são ímpares. 
    ENTRADA
        Digite o 1º-10º número: 
    SAÍDA
        Total de números pares: 4
        Total de números ímpares: 6
*/
const leia = require('readline-sync');
let n, par=0, impar=0;

for (let index = 1; index < 11; index++) {
    n = leia.questionInt(`Digite o ${index} numero: `,);

    if (n%2==0) {
        par++;
    } else {
        impar++
    }
};

console.log(`Total de números pares: ${par}`);
console.log(`Total de números pares: ${impar}`);
