const leia = require('readline-sync');

/* Elabore um algoritmo que leia o Salário Bruto, o Adicional Noturno,
as Horas Extras e os Descontos de um Colaborador, em variáveis do tipo
float e exiba na tela o Salário Líquido.
    ENTRADA
        Salário Bruto: 2000.00
        Adicional Noturno: 500.00
        Horas Extras: 100.00
        Descontos: 200.00
    PROCESSE
        SALÁRIO LÍQUIDO = SALÁRIO BRUTO + ADICIONAL NOTURNO + (HORAS EXTRAS * 5) - DESCONTOS
    SAÍDA
        Salário Líquido: 2800.00
*/

let saLiquido, saBruto, adicionalNoturno, horaExtra, desconto;

saBruto = leia.questionFloat("\nSalário Bruto: ",);
adicionalNoturno = leia.questionFloat("\nAdicional Noturno: ",);
horaExtra = leia.questionFloat("\nHoras Extras: ",);
desconto = leia.questionFloat("\nDescontos: ",);

saLiquido = saBruto + adicionalNoturno + (horaExtra * 5) - desconto;

console.log("Salário Líquido: " + saLiquido);
