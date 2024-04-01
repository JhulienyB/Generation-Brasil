/*Escreva um programa Java contendo uma Collection Stack (Pilha) de Objetos da Classe String, 
para organizar a retirada de livros em uma pilha. O programa deverá ter um Menu que aceitará as opções 0, 1, 2 e 3:
    1: Adicionar um novo livro na pilha. Deve solicitar o nome do livro.
    2: Listar todos os livros da Pilha
    3: Retirar um livro da pilha 
    0: O programa deve ser finalizado.  
Caso a pilha esteja vazia e o atendente tente retirar um livro da pilha, 
ele deverá informar que a pilha está vazia.
*/


import { Stack } from "./Stack";
import readline from 'readline-sync';

const pilha = new Stack<string>();

while (true) {
console.log("*************************************");
console.log("");
console.log("1 - Adicionar Livro na Pilha");
console.log("2 - Listar todos os Livro");
console.log("3 - Retirar Livro da Pilha");
console.log("0 - Sair");
console.log("");
console.log("*************************************");
console.log("Entre com a opção desejada: ");
let opcao = readline.questionInt();

switch (opcao) {
    case 1:
        let nome = readline.question("Digite o nome: ",);
        pilha.push(nome);
        console.log("\n\nPilha:\n");
        pilha.printStack();
        console.log("\nLivro adicionado!");
        readline.prompt();
        break;
    case 2:
        console.log("Lista de Livros na Pilha:\n");
        pilha.printStack();
        readline.prompt();
        break;
    case 3:
        if (!pilha.isEmpty()){
            pilha.pop();
            console.log("\n\nPilha:\n");
            pilha.printStack();
            console.log("\nUm Livro foi retirado da pilha!");
        } else
            console.log("A Pilha está vazia!");
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
