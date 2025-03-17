/* 7. Contar o número de vogais em uma palavra (Nível Médio)

Enunciado:
Crie um programa que conte o número de vogais em uma palavra fornecida. */

let word = "ParalElepipedo";
let counter = 0;
let vogals = "AEIOUaeiou";

// O loop percorre cada letra da palavra.
for (i = 0; i <= word.length; i++) {
  // Verifica se a letra atual é uma vogal.
  if (vogals.includes(word[i])) {
    // Incrementa o contador se for uma vogal.
    counter++;
  }
}

console.log(counter);