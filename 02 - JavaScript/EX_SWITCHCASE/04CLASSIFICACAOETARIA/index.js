/* 4. Classificação etária (Médio)

Enunciado:
Crie um programa que recebe a idade de uma pessoa e classifica como "Criança", "Adolescente", "Adulto" ou "Idoso". */

let idade = parseInt(prompt("Digite sua idade:"));

// switch (true) { → Usa true para avaliar expressões lógicas dentro do case.
switch (true) {
  // Cada case verifica a faixa etária correspondente.
  case idade >= 0 && idade <= 12:
    alert("Criança");
    break;
  case idade >= 13 && idade <= 17:
    alert("Adolecente")
    break;
  case idade >= 18 && idade <= 59:
    alert("Adulto")
    break;
  case idade >= 60:
    alert("Idoso")
    break;
  default:
    // O default → Trata idades inválidas (números negativos, por exemplo).
    alert("Idade Invalida!")
}