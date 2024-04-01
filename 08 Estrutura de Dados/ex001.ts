/*Escreva um programa contendo uma Fila de Objetos da Classe String, 
para organizar a ordem de chegada dos Clientes de um Banco. O programa deverá 
ter um Menu que aceitará as opções 0, 1, 2 e 3:
    1: Adicionar um novo Cliente na fila. 
        (Deve solicitar o nome do Cliente.)
    2: Listar todos os Clientes na fila
    3: Chamar (retirar) uma pessoa da fila 
    0: O programa deve ser finalizado. 
Caso a fila esteja vazia, o programa deverá informar que a fila está vazia ao tentar 
retirar (chamar) um cliente da fila.
    ENTRADA
        Digite uma opção: 1
        Digite o nome: Ana
    SAIDA
        Fila: 
        João
        Maria
        Ana
        Cliente Adicionado!
*/

import { Queue } from "./Queue";
import readline from 'readline-sync';

const fila = new Queue<string>()

while (true) {
console.log("*************************************");
console.log("");
console.log("1 - Adicionar Cliente na Fila");
console.log("2 - Listar todos os Clientes");
console.log("3 - Retirar Cliente da Fila");
console.log("0 - Sair");
console.log("");
console.log("*************************************");
console.log("Entre com a opção desejada: ");
let opcao = readline.questionInt();

switch (opcao) {
    case 1:
        let nome = readline.question("Digite o nome: ",);
        fila.enqueue(nome);
        console.log("\n\nFila:\n");
        fila.printQueue();
        console.log("\nCliente Adicionado!");
        readline.prompt();
        break;
    case 2:
        console.log("Lista de Clientes na Fila:\n");
        fila.printQueue();
        readline.prompt();
        break;
    case 3:
        if (!fila.isEmpty()){
            fila.dequeue();
            console.log("\n\nFila:\n");
            fila.printQueue();
            console.log("\nO Cliente foi Chamado!");
        } else
            console.log("A Fila está Vazia!");
        readline.prompt();
        break;
    case 0:
        console.log("\nPrograma Finalizado!");
        readline.prompt();
        break;
    default:
        break;
    }
}
