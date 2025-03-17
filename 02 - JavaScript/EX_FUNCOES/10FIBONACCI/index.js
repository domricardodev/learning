/* 10. Função para gerar sequência de Fibonacci (Nível Difícil)

Enunciado:
Crie uma função chamada fibonacci que gera os primeiros n termos da sequência de Fibonacci. */

function fibonacci(n) {
  // Os dois primeiros números da sequência.
  let sequencia = [0, 1];

  for (let i = 2; i < n; i++) {
    //  Adiciona os próximos números.
    sequencia.push(sequencia[i - 1] + sequencia[i - 2]);
  }

  return sequencia;
}

alert(fibonacci(7)); // [0, 1, 1, 2, 3, 5, 8]
