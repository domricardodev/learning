// Solicita ao usuário que digite o nome da nave e armazena o valor na variável 'spaceship'
let spaceship = prompt("Digite o nome da nave");

// Solicita ao usuário que digite o caracter que deseja substituir e armazena o valor na variável 'charToReplace'
let charToReplace = prompt("Qual caracter você deseja substituir?");

// Solicita ao usuário que digite o caracter que será usado para substituir e armazena o valor na variável 'replacementChar'
let replacementChar = prompt("Por qual caracter você deseja substituir?");

// Inicializa uma variável vazia chamada 'newSpaceship' que será usada para armazenar o novo nome da nave após a substituição
let newSpaceship = "";

// Inicia um loop 'for' que percorre cada caracter do nome da nave
// 'pos' é a posição atual do caracter que está sendo analisado
for (let pos = 0; pos < spaceship.length; pos++) {
  // Verifica se o caracter atual (spaceship[pos]) é igual ao caracter que o usuário deseja substituir (charToReplace)
  if (spaceship[pos] == charToReplace) {
    // Se for igual, adiciona o caracter de substituição (replacementChar) ao novo nome da nave (newSpaceship)
    newSpaceship += replacementChar;
  } else {
    // Se não for igual, adiciona o caracter original (spaceship[pos]) ao novo nome da nave (newSpaceship)
    newSpaceship += spaceship[pos];
  }
}

// Exibe um alerta com o novo nome da nave após a substituição
alert("O novo nome da nave é " + newSpaceship);