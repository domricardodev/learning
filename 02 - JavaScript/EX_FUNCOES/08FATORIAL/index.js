/* Enunciado:
Crie uma função chamada fatorial que recebe um número e retorna o fatorial dele.*/

function fatorial(n) {
  // Define que 0! e 1! são 1
  if (n === 0 || n === 1) return 1;
  // Chama a função recursivamente até n ser 1.
  return n * fatorial(n - 1);
}

alert(fatorial(5));