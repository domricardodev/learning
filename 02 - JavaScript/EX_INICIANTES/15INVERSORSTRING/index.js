/* Exercício 17: Inversor de String

Enunciado:
Crie um programa que recebe uma string e retorna a versão invertida dela.*/

let = palavra = prompt("Digite a palavra que quer inverter:");

// O método split('') divide a string em um array de caracteres. Por exemplo, se palavra = "ola", o resultado será ['o', 'l', 'a'].
// O método reverse() inverte a ordem dos elementos do array.
// O método join('') junta os elementos do array em uma única string.
let palavraInvertida = palavra.split('').reverse().join('');

alert("Palavra invertida: " + palavraInvertida);