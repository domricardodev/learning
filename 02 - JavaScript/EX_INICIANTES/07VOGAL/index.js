// Pede uma palavra ao usuário
let palavra = prompt("Digite uma palavra:");

// Função para contar as vogais
function contarVogais(palavra) {
  let contador = 0;
  let palavraMinuscula = palavra.toLowerCase();

  // Percorre a palavra e conta as vogais
  for (let i = 0; i < palavraMinuscula.length; i++) {
    if (["a", "e", "i", "o", "u"].includes(palavraMinuscula[i])) {
      contador++;
    }
  }
  return contador;
}

// Exibe o número de vogais
let numeroDeVogais = contarVogais(palavra);
alert(" a palavra '" + palavra + "' tem " + numeroDeVogais + " Vogais.")
