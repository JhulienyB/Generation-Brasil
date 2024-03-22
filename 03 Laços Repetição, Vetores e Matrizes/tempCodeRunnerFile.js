/*2. Escreva um algoritmo usando o laço WHILE, que leia a 
idade de várias pessoas (números inteiros), via teclado e mostre 
na tela o total de pessoas cuja idade seja menor que 21 anos e o total 
de pessoas cuja idade seja maior que 50 anos. A leitura dos dados deve
ser finalizada ao digitar uma idade negativa.
ENTRADA
        Digite uma idade: 2
        Digite uma idade: -1
    SAÍDA
        Total de pessoas menores de 21 anos: 5
        Total de pessoas maiores de 50 anos:  2

Total de pessoas maiores de 50 anos: 

*/
const leia = require('readline-sync');
let idade, maior=0, menor=0;

idade = leia.questionInt("Digite uma idade: ",);

while (idade>=0) {

    if (idade<21) {
        menor++;
    } else if (idade>50){
        maior++;
    };

    idade = leia.questionInt("Digite uma idade (para sair do programa digite um numero negativo): ",);
}

console.log("Total de pessoas menores de 21 anos: ", menor);
console.log("Total de pessoas maiores de 50 anos: ", maior);
