/* 10. Criar um tabuada de 1 a 10 (Nível Difícil)

Enunciado:
Crie um programa que imprima a tabuada de multiplicação de 1 a 10. */


// O loop externo percorre os números de 1 a 10.
for (let i = 1; i <= 10; i++) {
  // Imprime o cabeçalho para a tabuada do número atual.
  console.log(`taboada de ${i}`);
  // O loop interno percorre os números de 1 a 10 para cada número i.
  for (let j = 1; j <= 10; j++) {
    // console.log(${i} x ${j} = ${i * j}); → Exibe a multiplicação de i e j.
    console.log(`${i} x ${j} = ${i * j}`)
  }
  console.log("");
}