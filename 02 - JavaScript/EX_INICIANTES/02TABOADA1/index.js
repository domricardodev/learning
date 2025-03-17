// ask to the user a number
let number = parseInt(prompt("Digite um número:"));

// Exibe a taboada de um número
for (let i = 1; i <= 10; i++) {
  prompt(number + " x " + i + " = " + (number * i))
}