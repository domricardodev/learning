let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Filtra os números pares
let pares = numbers.filter(function (numbers) {
  return numbers % 2 === 0;  // Retorna apenas os pares
});

console.log(pares);