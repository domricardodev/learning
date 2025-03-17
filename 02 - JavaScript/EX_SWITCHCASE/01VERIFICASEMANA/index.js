/* 1. Verificar dia da semana (Fácil)

Enunciado:
Crie um programa que recebe um número de 1 a 7 e retorna o nome do dia correspondente. */


// Recebe um número digitado e converte de String para Número Inteiro.
let today = parseInt(prompt("Digite o número correspondente ao dia:\n[1] Domingo\n[2] Segunda-feira\n[3] Terça-feira\n[4] Quarta-feira\n[5] Quinta-feira\n[6] Sexta-feira\n[7] Sábado"));

// Inicia a estrutura switch, verificando o valor da variável (today).
switch (today) {
  // Se numero for 3, imprime "Terça-feira".
  case 1:
    alert("Domingo");
    // Para a execução do switch após encontrar um caso válido.
    break;
  case 2:
    alert("Segunda-feira");
    break;
  case 3:
    alert("Terça-feira");
    break;
  case 4:
    alert("Quarta-feira");
    break;
  case 5:
    alert("Quinta-feira");
    break;
  case 6:
    alert("Sexta-feira");
    break;
  case 7:
    alert("Sábado");
    break;
  // Caso o número não esteja entre 1 e 7, exibe "Número inválido!".
  default:
    alert("Número Invalido!");
}