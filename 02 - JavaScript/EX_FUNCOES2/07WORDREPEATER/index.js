function wordRepeater(word, repeater) {
  let result = ""; // String vazia para armazenar a repetição

  for (let i = 0; i < repeater; i++) {  // Loop para repetir a palavra 'repeater' vezes
    result += word + " ";
  }

  return result;  // Retorna a palavra repetida
}

console.log(wordRepeater("Dom ", 10));