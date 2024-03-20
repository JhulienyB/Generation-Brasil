const leia = require('readline-sync');

/* Dado os seguintes passos:
    ENTRADA
        Digite o Salário: (10000.00)
        Digite o Abono: (1000.00)
    PROCESSE
        NovoSalário = Salário + Abono
    SAÍDA
        Novo Salário: 11000.00
*/

let salario, abono, novoSalario

salario = leia.questionFloat("\nDDigite o Salário: ",);
abono = leia.questionFloat("\nDDigite o Abono: ",);

novoSalario = salario + abono;

console.log("Novo Salário: " + novoSalario);
