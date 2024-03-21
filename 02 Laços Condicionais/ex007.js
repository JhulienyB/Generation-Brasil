/* 7. Escreva um algoritmo usando laço SWITCH CASE, que simule uma calculadora simples.
O programa deverá ler dois números float: numero1 e numero2, e na sequência ler o Código da operação
matemática (número inteiro de 1 a 4). A seguir, mostre na tela o resultado da operação entre os 2 números. Caso a
operação seja diferente do intervalo 1 a 4, mostre a mensagem Operação Inválida!
    ENTRADA
        Digite o 1º número: 10.0
        Digite o 2º número: 5.0
        Operação: 1
    PROCESSE
        1 Soma
        2 Subtração
        3 Multiplicação
        4 Divisão
    SAÍDA
        10.0 + 5.0 = 15.0
*/
const leia = require('readline-sync');
let operacao, n1, n2, resultado;

n1 = leia.questionFloat("\nDigite o 1º número: ",);
n2 = leia.questionFloat("\nDigite o 2º número: ",);
operacao = leia.questionInt("Operação: ",);

switch(operacao){
    case 1:
        resultado = n1 + n2;
        console.log(n1, " + ", n2, " = ", resultado)
        break;
    case 2:
        resultado = n1 - n2;
        console.log(n1, " - ", n2, " = ", resultado)
        break;
    case 3:
        resultado = n1 * n2;
        console.log(n1, " x ", n2, " = ", resultado)
        break;
    case 4:
        resultado = n1 / n2;
        console.log(n1, " / ", n2, " = ", resultado)
        break;
    default:
        console.log("Operação Inválida");
}
