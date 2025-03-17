function fatorial(n) {
  let result = 1;
  let i = n;

  while (i > 1) {
    result *= i;
    i--;
  }

  return result;

}

console.log(fatorial(5)); // Exibe 120 (5x4x3x2x1)