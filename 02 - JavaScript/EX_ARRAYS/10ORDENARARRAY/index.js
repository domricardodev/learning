/* 10. Ordenar um array

Enunciado:
Ordene um array de números do menor para o maior. */

let numbers = [10, 2, 5, 7, 3, 6];
let words = ["Casa", "Pedra", "Bola", "Água"];

// `.sort()` ordena os números, mas precisa da função de comparação
numbers.sort(function (a, b) {
  return a - b;  // Ordem crescente
});

words.sort(function (a, b) {
  return a - b;  // Ordem crescente
});

console.log(numbers);
console.log(words); // sort(), não funciona com palavras. não dessa maneira. 