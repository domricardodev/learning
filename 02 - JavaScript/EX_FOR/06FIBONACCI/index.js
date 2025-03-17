/* 6. Imprimir uma sequência de Fibonacci (Nível Médio)

Enunciado:
Crie um programa que imprima os primeiros 10 números da sequência de Fibonacci. */


let n1 = 0, n2 = 1;

console.log(n1);
console.log(n2);

// Começa a partir do terceiro número e vai até o décimo.
for (let i = 3; i <= 10; i++) {
  // Calcula o próximo número da sequência.
  let next = n1 + n2;
  console.log(next);
  // Atualiza os valores de n1 e n2 para continuar a sequência.
  n1 = n2;
  n2 = next;
}
