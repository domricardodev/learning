/* 1. Pilha (Stack) - Adicionar e remover itens

Enunciado:
Crie uma função que simule a estrutura de uma pilha. A função deve permitir
 adicionar um item no topo da pilha e remover o item do topo. */

function pilha() {
  let stack = [];

  function push(item) {
    stack.push(item);
    console.log(`Item ${item} adicionado`);
  }

  function pop() {
    if (stack.length > 0) {
      let item = stack.pop();
      console.log(`Item ${item} removido.`)
    } else {
      console.log("A pilha está vazia");
    }
  }

  return { push, pop };
}

let minhaPilha = pilha();
minhaPilha.push(10);
minhaPilha.push(20);
minhaPilha.pop();