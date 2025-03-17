/* 2. Função para calcular a tabuada de um número

Enunciado:
Crie uma função chamada tabuada que recebe um número e exibe sua tabuada do 1 ao 10. */

let operation = "+";

function taboada(a, b) {
  if (operation === "+") {
    soma = a + b;
    return soma;
  } else if (operation === "-") {
    sub = a - b;
    return sub;
  } else if (operation === "*") {
    mult = a * b;
    return mult;
  } else if (operation === "/") {
    div = a / b;
    return div;
  } else {
    console.log("OPERAÇÃO INVALIDA");
  }
}

console.log(taboada(6, 2));