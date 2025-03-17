/* 4. Somar números de 1 a 100 (Médio)

Enunciado:
Escreva um programa que some todos os números de 1 a 100 e exiba o resultado. */

// let soma = 0; → Inicializa a variável que guardará a soma.
let soma = 0;

for (let i = 1; i <= 100; i++) {
  // soma += i; → Soma i ao valor acumulado de soma em cada iteração.
  soma += i;
}

console.log("Soma total:", soma);

