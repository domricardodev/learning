/* 3. Calculadora básica (Médio)

Enunciado:
Crie um programa que recebe dois números e uma operação (+, -, *, /) e retorna o resultado. */

let operation = parseInt(prompt("Digite a operação desejada:\n[1] Adição\n[2] Subtração\n[3] Multiplicação\n[4] Divisão"));
let num1 = parseInt(prompt("Digite o primeiro número:"));
let num2 = parseInt(prompt("Digite o segundo número:"));
let result = 0;

// Verifica se a operação é válida
if (operation >= 1 && operation <= 4) {
  switch (operation) {
    case 1:
      result = num1 + num2;
      alert("O resultado da soma entre " + num1 + " + " + num2 + " = " + result);
      break;
    case 2:
      result = num1 - num2;
      alert("O resultado da subtração entre " + num1 + " - " + num2 + " = " + result);
      break;
    case 3:
      result = num1 * num2;
      alert("O resultado da multiplicação entre " + num1 + " * " + num2 + " = " + result);
      break;
    case 4:
      // verifica divisão por zero.
      if (num2 === 0) {
        alert("Erro: Divisão por zero não é permitida!");
      } else {
        result = num1 / num2;
        alert("O resultado da divisão entre " + num1 + " / " + num2 + " = " + result);
      }
      break;
    default:
      alert("Opção Inválida!");
  }
} else {
  alert("Opção Inválida!");
}