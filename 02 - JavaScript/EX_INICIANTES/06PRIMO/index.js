/* Exercício 8: Verificar número primo

Enunciado:
Escreva um programa que verifique se um número fornecido pelo usuário é primo.

Como saber se um número é primo?

Para verificar se um número é primo, você pode:

    Tentar dividi-lo por todos os números primos menores que a sua raiz quadrada.

    Se ele não for divisível por nenhum deles, então é primo.

Por exemplo, para verificar se 13 é primo:

    Raiz quadrada de 13 ≈ 3,6.

    Números primos menores que 3,6: 2 e 3.

    13 não é divisível por 2 nem por 3.

    Portanto, 13 é primo.*/


/* let number = parseInt(prompt("Digite um número para verificar se é primo:"))

// Função para verificar se o número é primo
function primeCheck(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// verifica se o numero é primo
if (primeCheck(number)) {
  alert("O número " + number + " é PRIMO.")
} else {
  alert("O número " + number + " NÃO é PRIMO.")
} */

// Pede um número ao usuário
let numero = parseInt(prompt("Digite um número para verificar se é primo:"));

// Função para verificar se o número é primo
function verificarPrimo(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// Verifica se o número é primo
if (verificarPrimo(numero)) {
  console.log("O número " + numero + " é primo.");
} else {
  console.log("O número " + numero + " não é primo.");
}
