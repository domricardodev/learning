/* 2. Identificar tipo de animal (Fácil)

Enunciado:
Crie um programa que recebe o nome de um animal e informa se ele é um mamífero, ave ou réptil. */

// No Node.js, você pode usar o módulo readline para capturar entradas do usuário.
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

// Solicita um número ao usuário
readline.question('Digite um animal:\nCobra [1]\nVaca [2]\nÁguia [3]\nJacaré [4]\nCapivara [5]\nArara Azul [6]\n', (animal) => {

  const opcao = parseInt(animal);

  switch (opcao) {
    case 1:
      console.log("O animal é um Réptil!");
      break;
    case 2:
      console.log("O animal é um Mamífero!");
      break;
    case 3:
      console.log("O animal é uma Ave!")
      break;
    case 4:
      console.log("O animal é um Réptil!");
      break;
    case 5:
      console.log("O animal é um Mamífero!");
      break;
    case 6:
      console.log("O animal é uma Ave!")
      break;
    default:
      console.log("Opção Invalida!")
  }

  readline.close();
});

