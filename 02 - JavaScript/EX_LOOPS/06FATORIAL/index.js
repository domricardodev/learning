/* 6. Fatorial de um número (Médio)

Enunciado:
Peça um número e calcule seu fatorial (exemplo: 5! = 5 × 4 × 3 × 2 × 1 = 120). */

let num = 5;
let fatorial = 1; // let fatorial = 1; → Começa com 1, pois multiplicação inicial com 0 daria sempre 0.

// for (let i = numero; i > 1; i--) → Multiplica numero × (numero - 1) × ... × 2.
for (i = num; i > 1; i--) {
  fatorial *= i;
}

console.log(`O fatorial de ${num} é ${fatorial}`);