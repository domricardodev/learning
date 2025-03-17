/* 5. Classificação de notas (Médio)

Enunciado:
Crie um programa que recebe uma nota de 0 a 10 e classifica o aluno como "Reprovado", "Recuperação" ou "Aprovado". */

let nota = 5;

// switch (true) { → Usa true para avaliar expressões lógicas dentro do case.
switch (true) {
  case nota >= 0 && nota < 5:
    console.log("Reprovado");
    break;
  case nota >= 5 && nota < 7:
    console.log("Recuperação");
    break;
  case nota >= 7 && nota <= 10:
    console.log("Aprovado");
    break;
  default:
    console.log("Nota inválida!");
}