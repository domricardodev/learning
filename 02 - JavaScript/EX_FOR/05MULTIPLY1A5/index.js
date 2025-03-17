/* 5. Multiplicar os números de 1 a 5 (Nível Médio)

Enunciado:
Crie um programa que calcule o produto de todos os números de 1 a 5. */

let prod = 1;

for (let i = 1; i <= 5; i++) {
  // prod = prod * i;

  // Multiplica o valor de produto por i a cada iteração.
  prod *= i;
}

console.log(prod) // 120
