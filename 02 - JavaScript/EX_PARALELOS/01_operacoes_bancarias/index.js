let name = prompt("Nome: ")
let cc = parseInt(prompt("Digite o numero da conta:"))
let senha = parseInt(prompt("Digite a senha:"))

let operacao = parseInt(prompt("Digite a operação:\n [1] SAQUE\n [2] TRANSFERENCIA\n [3] DEPOSITO"))

let saque

let saldo = 230.99

if (operacao === 1) {
  saque = parseInt(prompt("Quanto deseja sacar?"))
  if (saque >= saldo) {
    alert("SALDO INSUFICIENTE")
  } else {
    alert("SAQUE NO VALOR DE: " + saque)
  }
} else {
  alert("OPCAO INVALIDA!")
}


senha.length

function soma(num1, num2) {
  return num1 * num2;
}

soma(2, 3);

