let numbers = [1, 2, 3, 4, 5];


// `.reduce()` acumula valores, somando todos os elementos
let sum = numbers.reduce(function (acumulator, numbers) {
  return acumulator + numbers;
}, 0);

console.log("Soma total:", sum);

// Uso do .reduce() para reduzir um array a um único valor.