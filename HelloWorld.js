console.log("Hello World")

const leia = require('readline-sync');

let quantidade, altura, tipo, resposta, palavra;

quantidade = leia.questionInt("Digite um valor inteiro: ",);
console.log("O valor inteiro digitado foi: " + quantidade);

altura = leia.questionFloat("\nDigite um valor do tipo Float: ", {limitMessage: 'Digite um numero float'});
console.log("O valor float digitado foi: " + altura);

tipo = leia.keyIn("\nDigite um valor do tipo Char: ");
console.log("\nO valor char digitado foi: " + tipo);

resposta = leia.keyInYNStrict("\nDigite um valor do tipo Boolean: ");
console.log("O valor boolean digitado foi: " + resposta);

palavra = leia.question("\nDigite um valor do tipo string: ");
console.log("O valor string digitado foi: " + palavra);