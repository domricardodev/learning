function ehPrimo(n) {
  //  Números menores que 2 não são primos.
  if (n < 2) return false;
  // Testa divisibilidade de n.
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }

  return true
}

alert(ehPrimo(7)); // true
alert(ehPrimo(10)); // false