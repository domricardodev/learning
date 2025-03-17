// Pede o número ao usuário
let number = parseInt(prompt("Digite o numedo do qual deseja o calculo FATORIAL:"))

// Verifica se o número inserido é um número válido
if (isNaN(number) || number < 0) {
  alert("Por favor, insira um número inteiro positivo.")
} else {
  // Função para calcular o fatorial
  function fatorial(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    return result;
  }
}

// Exibe o fatorial

let resultFatorial = fatorial(number);
alert("O FATORIAL de " + number + " é: " + resultFatorial);
