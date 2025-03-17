/* 7. Adivinhação de número

Enunciado:
Implemente um programa que permita o usuário tentar adivinhar um número secreto
entre 1 e 10. O loop continua até o número ser acertado.*/

let numeroSecreto = 7;  // Define o número secreto
let tentativa;

while (tentativa !== numeroSecreto) {  // Enquanto a tentativa for diferente do número secreto
  tentativa = parseInt(prompt("Tente adivinhar o número (1 a 10):"));  // Pede ao usuário para tentar adivinhar
}

alert("Parabéns! Você acertou!");  // Exibe uma mensagem quando o usuário acerta



