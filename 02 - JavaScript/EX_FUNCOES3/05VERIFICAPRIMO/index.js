// Declara a função chamada ehPrimo que recebe um número
function ehPrimo(num) {
  // Números menores que 2 não são primos
  if (num < 2) {
    return false;
  }

  // Verifica se o número tem algum divisor além de 1 e ele mesmo
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {  // Se for divisível, não é primo
      return false;
    }
  }

  return true;  // Se não encontrou divisores, é primo
}

console.log(ehPrimo(7));
console.log(ehPrimo(13));
console.log(ehPrimo(2))