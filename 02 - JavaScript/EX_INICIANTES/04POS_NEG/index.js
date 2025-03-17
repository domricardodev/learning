// Exercício 6: Verificar número positivo ou negativo

// Enunciado:
// Escreva um programa que peça um número ao usuário e verifique se ele é positivo, negativo ou zero.

let number = parseInt(prompt("Digite um número:"))

if (number > 0) {
  alert("O número: " + number + " é POSITIVO.")
} else if (number < 0) {
  alert("O número: " + number + " é NEGATIVO.")
} else if (number == 0) {
  alert("O número é ZERO.")
} else {
  alert("Its not a NUMBER.")
}