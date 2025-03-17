function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomNumber(1, 10)); // Gera um número entre 1 e 10