let num = parseInt(8);

function verificaPrimo(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

if (verificaPrimo(num)) {
  console.log("O numero", num, "é PRIMO.")
} else {
  console.log("O número", num, "Não é PRIMO.")
}