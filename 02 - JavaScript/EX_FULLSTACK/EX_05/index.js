// Solicita data de entrada em modo string
let departureDateEntry = prompt("Digite a data de partida (FORMATO DD/MM/YYYY)")

// Usa a biblioteca moment para converter a entrada de string para formato de data.
let departureDate = moment(departureDateEntry, "DD/MM/YYYY")

// Chama  a biblioteca moment para retornar a data atual.
let today = moment()

// Calcula a diferença da entre a data atual e a data de partida
let dateDiff = today - departureDate

// * O biblioteca moment trasnforma/converte a data imputada em milisegundos. 1 segundo == 1000 milisegundos | 1 minuto == 60 segundos | 1 hora == 3600 segundos | 1 dia == 3600 * 24 segundos.

// Pergunta para o usuário para que formato ele quer converter a data imputada. Segundos, minutos, horas ou dias. 
let chosenOption = prompt("Como gostaria de exibir o tempo de partida? \n[1]Segundos \n[2]Minutos\n[3]Horas\n[4]Dias ")

// Verifica opção escolhida e faz calculo de exibição
if (chosenOption == "1") {
  let secondsOfDeparture = Math.round(dateDiff / 1000)
  alert("Tempo de voo: " + secondsOfDeparture + " Segundos.")
} else if (chosenOption == "2") {
  let minutesOfDeparture = Math.round(dateDiff / 1000 / 60)
  alert("Tempo de voo: " + minutesOfDeparture + " Minutos.")
} else if (chosenOption == "3") {
  let hourOfDeparture = Math.round(dateDiff / 1000 / 3600)
  alert("Tempo de voo: " + hourOfDeparture + " Horas.")
} else if (chosenOption == "4") {
  let daysOfDeparture = Math.round(dateDiff / 1000 / 3600 * 24)
  alert("Tempo de voo: " + daysOfDeparture + " Dias.")
} else {
  alert("Opção Invalida")
}