function contemLetra(palavra, letra) {
  return palavra.includes(letra); // Verifica se a letra está na palavra.
}

console.log(contemLetra("banana", "b")); // exibe true
console.log(contemLetra("morango", "y")); // exibe false