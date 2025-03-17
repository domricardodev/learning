let pilotName = prompt("Digite sue nome: ")

let velocity = 0

let newVelocity = prompt("Qual velocidade voce gostaria de acelerar? ")

let confirmVelocity = confirm("Estamos acelerando para " + newVelocity + "Km/s")

if (confirmVelocity) {
  velocity = newVelocity
}

if (velocity <= 0) {
  alert("A NAVE ESTA PARADA. CONSIDERE AUMENTAR A VELOCIDADE")
} else if (velocity < 40) {
  alert("Você está muito devagar. Considere aumentar a velocidade!")
} else if (velocity < 80) {
  alert("Parece uma boa velocidade para se manter!")
} else if (velocity < 100) {
  alert("Velocidade alta. Considere diminuir")
} else {
  alert("VELOCIDADE PERIGOSA. PILOTO AUTOMATICO FORÇADO.")
}

alert("Piloto: " + pilotName + "\nVelocidade: " + velocity + "Km/s")
