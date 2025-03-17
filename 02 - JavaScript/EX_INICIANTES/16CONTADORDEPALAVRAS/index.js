/* Exercício 18: Contador de Palavras

Enunciado:
Crie um programa que conte quantas palavras há em uma frase digitada pelo usuário.*/

let frase = prompt("Digite uma frase:");

/*Essa linha faz duas operações encadeadas para processar a frase:
a) frase.trim():

    O método trim() remove os espaços em branco (espaços, tabulações, quebras de linha) do início e do final da string.

    Por exemplo, se o usuário digitar " Olá, mundo! ", o trim() resultará em "Olá, mundo!".

b) .split(/\s+/):

    O método split() divide a string em um array de substrings com base em um separador.

    O argumento /\s+/ é uma expressão regular que significa "um ou mais espaços em branco".

    Isso garante que múltiplos espaços entre palavras sejam tratados como um único separador.

    Por exemplo, se a frase for "Olá, mundo!", o split(/\s+/) resultará em ["Olá,", "mundo!"].

Resultado: palavras é um array contendo as palavras da frase, sem espaços extras.*/
let palavras = frase.trim().split(/\s+/);

alert("Número de palavras: " + palavras.length);