/* 4. Soma de números de 1 a 100

Enunciado:
Somar os números de 1 a 100 utilizando while e exibir o resultado final. */

let i = 1;  // Inicializa 'i' com 1
let soma = 0;  // Inicializa a variável 'soma' com 0

while (i <= 100) {  // O loop continua enquanto 'i' for menor ou igual a 100
  soma += i;  // Soma 'i' à variável 'soma'
  i++;  // Incrementa 'i' em 1 a cada iteração
}

console.log("Soma total:", soma);  // Exibe o resultado final da soma (a virgula prezerva o tipo inteiro)