// Declara a função chamada contarVogais que recebe uma string
function vogalsCounter(word) {
  let vogals = "aeiouAEIOU";  // Define as vogais maiúsculas e minúsculas
  let counter = 0;  // Inicializa o contador de vogais

  // Percorre cada letra da palavra
  for (let letter of word) {
    // Se a letra estiver dentro da string de vogais, aumenta o contador
    if (vogals.includes(letter)) {
      counter++;
    }
  }

  return counter; // Retorna a quantidade de vogais
}

console.log(vogalsCounter("javascript"));
console.log(vogalsCounter("programaçao"));