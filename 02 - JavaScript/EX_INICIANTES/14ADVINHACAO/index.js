/* Exercício 16: Jogo de Adivinhação

Enunciado:
Crie um jogo onde o usuário precisa adivinhar um número aleatório entre 1 e 10.*/


// Math.floor(...): Arredonda o número para baixo, resultando em um número inteiro entre 0 e 9.
// Math.random(): Gera um número decimal aleatório entre 0 (inclusive) e 1 (exclusivo).
// Math.random() * 10: Multiplica o número aleatório por 10, resultando em um número entre 0 (inclusive) e 10 (exclusivo).
let numeroSecreto = Math.floor(Math.random() * 10) + 1;

// Solicita a tentativa do usuario. parseInt(converte a string digitada em numero inteiro)
let tentativa = parseInt(prompt("Adivinhe um número entre 1 e 10"));


// Verifica se o número digitado bate com o número gerado
// A função isNaN() verifica se um valor é NaN (Not a Number) ou não.
if (isNaN(tentativa) || tentativa < 1 || tentativa > 10) {
  alert("Por favor, insira um número válido entre 1 e 10.")
} else if (tentativa === numeroSecreto) {
  alert("Parabéns! Você acertou!")
} else {
  alert("Voce errou! O número era: " + numeroSecreto);
}

