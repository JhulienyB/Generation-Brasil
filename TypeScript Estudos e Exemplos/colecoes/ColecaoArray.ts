
const numeros: Array<number> = new Array<number>();

//Adiciona um elemento de cade vez no final
numeros.push(1);
numeros.push(5);
numeros.push(7);
numeros.push(1);

//Adiciona vários elementos de uma vez só no começo
numeros.unshift(2.5, 4.5);

console.table(numeros);
console.log(" posição do elemento 5 é " + numeros.indexOf(5))
console.log(" posição do elemento 7 existe? " + numeros.includes(7)) //Método Boolean
console.log(" posição do elemento 10 existe? " + numeros.includes(10)) //Método Boolean

//Atualizar os dados de um elemento
numeros[numeros.indexOf(7)] = 10;
console.table(numeros);

//Apagar um elemento do Array
//Primeiro parâmetro é indice do elemento
//Segundo parâmetro é quantos elementos você deseja apagar a partir do indice
numeros.splice(numeros.indexOf(10), 1);
numeros.indexOf(7)
console.table(numeros);
