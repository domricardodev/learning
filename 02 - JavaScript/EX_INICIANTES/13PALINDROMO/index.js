/* Exercício 15: Palíndromo

Enunciado:
Crie um programa que verifique se uma palavra ou frase é um palíndromo 
(lê-se da mesma forma de trás para frente). */

function verificaPalindromo() {
  let palavra = prompt("Digite uma palavra ou frase:").toLowerCase().replace(/[\s,]/g, '');
  let invertida = palavra.split('').reverse().join('');

  if (palavra === invertida) {
    alert("É um palíndromo!");
  } else {
    alert("Não é um palíndromo!")
  }
}

verificaPalindromo();