// Solicita dados de entrada em modo String
let departureDateEntry = prompt("Digite a data de partida. (DD/MM/YYYY)");

// Usa a biblioteca Moment para converter a entrada de dados de String para Data (dia/mes/ano)
let departureDate = moment(departureDateEntry, "DD/MM/YYYY");

// Chama a biblioteca Moment para retornar a data atual.
let today = moment();

// Calcula a diferença entre a data atual e a data de partida
let dateDiff = today - departureDate;

// * O biblioteca moment trasnforma/converte a data imputada em milisegundos. 
// 1 segundo == 1000 milisegundos | 1 minuto == 60 segundos | 1 hora == 3600 segundos | 1 dia == 3600 * 24 segundos.

// Perdunta ao usuário para que formato ele quer converter a data de partida. Segundos, minutos, horas ou dias.
let chosenOption = prompt("Como goataria de exibir o tempo de partida? \n[1] SEGUNDOS \n[2] MINUTOS \n[3]HORAS \n[4]DIAS")

// Verifica a opcão escolhida e faz o calculo para a exibição do valor.

if (chosenOption == "1") {
  // Biblioteca Math.round(arredonda o resultado de uma operação matemática.)
  let secondsOfDeparture = Math.round(dateDiff / 1000)
  alert("Tempo de voo: " + secondsOfDeparture + "segundos.")
} else if (chosenOption == "2") {
  let minutesOfDeparture = Math.round(dateDiff / 1000 / 60)
  alert("Tempo de voo: " + minutesOfDeparture + " minutos.")
} else if (chosenOption == "3") {
  let hourOfDeparture = Math.round(dateDiff / 1000 / 3600)
  alert("Tempo de voo: " + hourOfDeparture + " horas.")
} else if (chosenOption == "4") {
  let daysOfDeparture = Math.round(dateDiff / 1000 / 3600 / 24)
  alert("Dias de voo " + daysOfDeparture + " dias.")
} else {
  alert("OPÇÃO INVALIDA!!!")
}