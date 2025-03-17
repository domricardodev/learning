/* 6. Tradutor de cores (Difícil)

Enunciado:
Crie um programa que recebe uma cor em inglês e retorna sua tradução em português. */

let color = "green";

switch (color) {
  case "blue":
    console.log("Azul");
    break;
  case "yellow":
    console.log("Amarelo");
    break;
  case "red":
    console.log("Vermelho");
    break;
  case "grey":
    console.log("Cinza");
    break;
  case "green":
    console.log("Verde");
    break;
  case "black":
    console.log("Preto")
    break;
  case "orange":
    console.log("Laranja")
  default:
    console.log("Cor Desconhecida!")
}