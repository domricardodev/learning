/* 3. Função para inverter uma string

Enunciado:
Crie uma função chamada inverterString que recebe uma palavra e retorna ela ao contrário. */

function inverterString(texto) {
  // Converte a string em array, inverte e junta de novo
  return texto.split("").reverse().join("");
}

console.log(inverterString("javascript"));
console.log(inverterString("dom")); 