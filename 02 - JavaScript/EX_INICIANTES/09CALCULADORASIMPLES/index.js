/* Exercício 11: Calculadora Simples

Enunciado:
Crie uma calculadora que permita ao usuário escolher uma operação 
(soma, subtração, multiplicação ou divisão) e dois números para
calcular o resultado. */

function calculator() {
  let operacao = prompt("Digite a operacão desejada: [-] - [+] - [*] - [/]")
  let number1 = parseInt(prompt("Digite o primeiro número:"))
  let number2 = parseInt(prompt("Digite o segundo número:"))
  let result;

  switch (operacao) {
    case "+":
      result = number1 + number2;
      break;
    case "-":
      result = number1 - number2;
      break;
    case "*":
      result = number1 * number2;
      break;
    case "/":
      result = number1 / number2;
      break;
    default:
      result = "Operação Invalida!"
  }
  alert("O resultado é: " + result);
}

calculator();