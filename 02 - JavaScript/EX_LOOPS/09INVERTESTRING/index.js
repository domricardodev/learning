/* 9. Inverter uma string (Difícil)

Enunciado:
Peça ao usuário uma palavra e imprima-a invertida.*/

let word = prompt("Digite uma palavra:")
let inverse = "";

for (let i = word.length - 1; i >= 0; i--) {
  inverse += word[i];
}

alert("A palavra invertida é: " + inverse);