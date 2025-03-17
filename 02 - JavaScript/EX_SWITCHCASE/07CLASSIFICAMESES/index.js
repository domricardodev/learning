/* 7. Classificação de meses (Difícil)

Enunciado:
Crie um programa que recebe um número de 1 a 12 e informa a estação do ano correspondente. */

let mes = 5;

switch (mes) {
  case 12:
  case 1:
  case 2:
    console.log("Verão");
    break;
  case 3:
  case 4:
  case 5:
    console.log("Outono");
    break;
  case 6:
  case 7:
  case 8:
    console.log("Inverno")
    break;
  case 9:
  case 10:
  case 11:
    console.log("Primavera");
    break;
  default:
    console.log("Mês Invalido!")
}
