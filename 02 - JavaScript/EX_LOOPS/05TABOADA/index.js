/* 5. Tabuada de um número (Médio)

Enunciado:
Peça um número ao usuário e imprima sua tabuada de 1 a 10. */

let = num = 2;

for (i = 1; i <= 10; i++) {
  // ${numero} x ${i} = ${numero * i} → Formata a saída com a multiplicação.
  console.log(`${num} x ${i} = ${num * i} `);
}

let num2 = 3;

for (i = 1; i <= 10; i++) {
  console.log(`${num2} / ${i} = ${num2 / i}`);
}

let num3 = 4;

for (i = 1; i <= 10; i++) {
  console.log(`${num3} - ${i} = ${num3 - i}`);
}

let num4 = 5;

for (i = 1; i <= 10; i++) {
  console.log(`${num4} * ${i} = ${num4 * i}`);
}