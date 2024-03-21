const leia = require('readline-sync');

/*Leia quatro valores float (n1, n2, n3, n4). A seguir, calcule e mostre a diferença do
produto entre o n1 e n2 pelo produto entre o n3 e o n4.
    ENTRADA
        numero1: 5.0
        numero2: 6.0
        numero3: 7.0
        numero4: 8.0
    PROCESSE
        CALCULO = (n1 * n2) – (n3 * n4)
    SAÍDA
        Diferença: -26.0
*/

let numero1, numero2, numero3, numero4, diferenca;

n1 = leia.questionFloat("\nnumero1: ",);
n2 = leia.questionFloat("\nnumero2: ",);
n3 = leia.questionFloat("\nnumero3: ",);
n4 = leia.questionFloat("\nnumero4: ",);

diferenca = (n1 * n2)-(n3 * n4);

console.log("Diferença: " + diferenca);
