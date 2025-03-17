// Verifica se numero é impar ou par

// parseInt("CONVERTE UMA STRING EM NUMERO INTEIRO")
let number = parseInt(prompt("Digite um número:"))

if (number % 2 == 0) {
  alert("O número " + number + " é PAR.")
} else {
  alert("O numero: " + number + " é IMPAR.")
}