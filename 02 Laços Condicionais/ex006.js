/* 6. Com base na tabela abaixo, escreva um algoritmo em Java que leia o Nome do
Colaborador (String), o Código do Cargo do Colaborador (número inteiro de 1 a 6) e o
Salário (número float). A seguir, mostre na tela o Nome do Colaborador, o Cargo e o
novo Salário reajustado.
    ENTRADA
        Nome do colaborador: Maria dos Anjos
        Cargo: 5
        Salário: R$ 2000.00
    PROCESSE
        1 Gerente 10%
        2 Vendedor 7%
        3 Supervisor 9%
        4 Motorista 6%
        5 Estoquista 5%
        6 Técnico de TI 8%
        Novo Salário = salário + (reajuste * salário)
    SAÍDA
        Nome do colaborador: Maria dos Anjos
        Cargo: Estoquista
        Salário: R$ 2100.00
*/
const leia = require('readline-sync');
let nome, cargo, salario, reajuste, novoSalario, cargoNome;

nome = leia.question("\nNome do colaborador: ",);
cargo = leia.questionInt("Cargo: ",);
salario = leia.questionFloat("\nSalário: R$",);

switch(cargo){
    case 1:
        cargoNome = "Gerente";
        reajuste = 0.1;
        break;
    case 2:
        cargoNome = "Vendedor";
        reajuste = 0.07;
        break;
    case 3:
        cargoNome = "Supervisor";
        reajuste = 0.09;
        break;
    case 4:
        cargoNome = "Motorista";
        reajuste = 0.06;
        break;
    case 5:
        cargoNome = "Estoquista";
        reajuste = 0.05;
        break;
    case 6:
        cargoNome = "Técnico de TI";
        reajuste = 0.8;
        break;
    default:
        console.log("Cargo Invalido");
}

novoSalario = salario + (reajuste * salario)

console.log("\nNome do colaborador: " + nome);
console.log("Cargo: " + cargoNome);
console.log("Salário: R$" + novoSalario);
