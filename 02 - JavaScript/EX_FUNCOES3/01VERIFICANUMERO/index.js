/* 1. Função para verificar se um número é positivo, negativo ou zero

Enunciado:
Crie uma função chamada verificarNumero que recebe um número e retorna:

    "Positivo" se for maior que zero
    "Negativo" se for menor que zero
    "Zero" se for exatamente zero */


function verificarNumero(num) {
  if (num > 0) {
    console.log("Número: " + num + " POSITIVO!")
  } else if (num < 0) {
    console.log("Número: " + num + " NEGATIVO!")
  } else {
    console.log("Número: " + num + " ZERO!")
  }

  return num;

}

console.log(verificarNumero(10)); // exibe positivo
console.log(verificarNumero(-2)); // exibe negativo
console.log(verificarNumero(0));  // exibe zero

