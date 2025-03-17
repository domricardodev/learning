/* 2. Identificar tipo de animal (Fácil)

Enunciado:
Crie um programa que recebe o nome de um animal e informa se ele é um mamífero, ave ou réptil. */

let animal = prompt("Qual animal: ")

switch (animal) {
  case "gato":
  case "cachorro":
  case "vaca":
    alert("Mamífero");
    break;
  case "cobra":
  case "jacare":
  case "iguana":
    alert("Réptil");
    break;
  case "aguia":
  case "arara":
  case "urubu":
    alert("Ave");
    break
  default:
    alert("Não está no banco de dados!")
}