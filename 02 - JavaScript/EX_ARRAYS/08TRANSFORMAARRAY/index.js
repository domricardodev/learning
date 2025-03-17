/* 8. Transformar elementos do array

Enunciado:
Multiplique cada número do array por 2 usando .map(). */

let numbers = [1, 2, 3, 4, 5]

// `.map()` cria um novo array aplicando uma função a cada elemento. Uso de .map() para transformar elementos.

let doubles = numbers.map(function (numbers) {
  return numbers * 2;
});

console.log(doubles);