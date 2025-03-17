/* 9. Imprimir os divisores de um número (Nível Difícil)

Enunciado:
Crie um programa que imprima todos os divisores de um número. */

// Define o número a ser analisado.
let number = 36;

//O loop vai de 1 até o próprio número.
for (let i = 1; i <= number; i++) {
  // Verifica se i é divisor de numero.
  if (number % i === 0) {
    // Imprime os divisores.
    console.log(i);
  }
}