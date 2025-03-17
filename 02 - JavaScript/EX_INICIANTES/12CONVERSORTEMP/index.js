/* Exercício 14: Conversor de Temperatura (Celsius ⇄ Fahrenheit)

Enunciado:
Crie um programa que converta temperaturas entre Celsius e Fahrenheit. 

A fórmula para converter uma temperatura de Celsius para Fahrenheit é:
F=(C×9/5)+32
C=(F−32)×5/9​
*/

function conversorCF() {
  let = typeTemp = prompt("Digite a temperatura (C ou F):")
  if (typeTemp.toUpperCase() === "C") {
    let tempC = parseInt(prompt("Digite a temperatura em Celsius: "));
    let tempF = (tempC * 9 / 5) + 32;
    alert("A temperatura convertida para Fahrenheit é Fº " + tempF.toFixed(2));
  } else if (typeTemp.toUpperCase() == "F") {
    let tempF = parseInt(prompt("Digite o temperatura em Fahrenheit: "));
    let tempC = (tempF - 32) * 5 / 9;
    alert("A temperatura convertida para Celsius é Cº " + tempC.toFixed(2))
  } else {
    alert("Opção Invalida!")
  }
}

conversorCF();