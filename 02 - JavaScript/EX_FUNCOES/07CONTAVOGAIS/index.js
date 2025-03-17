function contarVogais(texto) {
  let vogais = "aeiouAEIOU";
  let contador = 0;

  // Percorre cada letra da string.
  for (let letra of texto) {
    //Verifica se a letra é uma vogal.
    if (vogais.includes(letra)) {
      // Incrementa o contador se for uma vogal.
      contador++;
    }
  }

  return contador;
}

alert(contarVogais("paralelepipedo")) // 3