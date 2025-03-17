/* Exercício 7: Média de três notas

Enunciado:
Escreva um programa que calcule a média de três notas fornecidas pelo usuário e exiba o resultado.*/

let firstNote = parseInt(prompt("Digite a 1 nota:"));
let secondNote = parseInt(prompt("Digite a 2 nota:"));
let thirdNote = parseInt(prompt("Digite a 3 nota:"));

// Calcula a media da nota somando as 3 notas e dividindo por 3. (atencão a ordem de precedencia matemática)
let media = (firstNote + secondNote + thirdNote) / 3;

alert("A media do de notas do semestre é: " + media)
