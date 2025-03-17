let nave = prompt("Qual o nome da Nave:")
let option = parseInt(prompt("Deseja fazer um dobra? \nSIM [1]\nNÃO [2]"));
let dobra = 0;

while (option === 1) {
  alert("Dobra realizada.");
  option = parseInt(prompt("Deseja fazer um dobra? \nSIM [1]\nNÃO [2]"));
  dobra++;
}

alert("Contagem encerrada.")
alert("Nome da nave: " + nave + "\nO número de dobras foi: " + dobra);
