/* 3. Função para verificar se um número é par (Nível Fácil)

Enunciado:
Crie uma função chamada ehPar que recebe um número como parâmetro e
retorna true se for par e false se for ímpar.*/

// Define a função ehPar, que recebe um número.
function ehPar(num) {
  // Retorna true se o número for par (divisível por 2), senão false.
  return num % 2 === 0;
}

alert(ehPar(4)); // true
alert(ehPar(7)); // false