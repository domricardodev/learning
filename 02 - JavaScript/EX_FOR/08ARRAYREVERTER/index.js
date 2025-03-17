/* 8. Reverter um array (Nível Médio)

Enunciado:
Crie um programa que reverta a ordem de um array. */

let array = [1, 2, "C", 4, 5]

//  Inicializa o array onde a sequência invertida será armazenada.
let reversedArray = [];

//  Começa pelo último índice do array e vai até o índice 0.
for (let i = array.length - 1; i >= 0; i--) {
  // Adiciona cada elemento no array invertido.
  reversedArray.push(array[i]);
}

console.log(reversedArray);