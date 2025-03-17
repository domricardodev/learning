/* 10. Pirâmide de números (Desafio)

Enunciado:
Crie um programa que imprima um triângulo numérico. */

let linhas = 5;

// Loop externo (i) → Controla as linhas do triângulo.
for (let i = 1; i <= linhas; i++) {
  let linha = "";
  // Loop interno (j) → Controla a quantidade de números em cada linha.
  for (let j = 1; j <= i; j++) {
    linha += j + " ";
  }
  console.log(linha);
}
