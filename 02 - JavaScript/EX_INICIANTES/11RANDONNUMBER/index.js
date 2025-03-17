/* Exercício 13: Gerador de Números Aleatórios

Enunciado:
Crie um programa que gere e exiba um número aleatório entre dois valores
definidos pelo usuário. */

let min = parseInt(prompt("Digite o valor mínimo:"));
let max = parseInt(prompt("Digite o valor máximo:"));

// Gera um número aleatório entre o valor mínimo e o valor máximo (inclusive).
// A função Math.random() gera um número decimal entre 0 (inclusive) e 1 (exclusivo).
// Multiplicando por (max - min + 1), garantimos que o número gerado esteja no intervalo correto.
// Math.floor arredonda o resultado para baixo, garantindo um número inteiro.
// Somando "min" ao final, deslocamos o intervalo para começar a partir do valor mínimo.
let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

alert("Número aleatório gerado: " + randomNumber);