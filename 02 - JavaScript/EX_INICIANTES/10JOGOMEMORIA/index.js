/* Exercício 12: Jogo da Memória (Simples)

Enunciado:
Crie um jogo da memória onde o usuário precisa memorizar um número por
 alguns segundos antes de ele desaparecer e, em seguida, tentar digitá-lo
 corretamente.*/

function memoryGame() {
  // Gera um número aleatorio entre 0 99.
  let number = Math.floor(Math.random() * 100);
  alert("Memorize este número: " + number);

  setTimeout(() => {
    let answer = parseInt(prompt("Digite o número que viu:"));
    if (answer === number) {
      alert("Parabéns! Você acertou mizeravi!");
    } else {
      alert("Errado! O número era " + number);
    }
  }, 3000); //Espera de 3 segundos antes da resposta sumir
}

memoryGame();