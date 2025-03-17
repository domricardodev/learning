/* 8. Adivinhe o número (Difícil) (Do While Exercise)

Enunciado:
Simule um jogo onde o computador escolhe um número de 1 a 10, e o
usuário deve adivinhar. O jogo continua até acertar. */

let secretNum = Math.floor(Math.random() * 10) + 1;
let tentativa;

do {
  tentativa = parseInt(prompt("tente adivinhar o número (1 a 10:)"));
} while (tentativa !== secretNum);

alert("Parabéns! Você acertou.");


