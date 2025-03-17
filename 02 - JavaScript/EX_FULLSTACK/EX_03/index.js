// reads the name and age for the older person
let olderPersonName = prompt('Digite o nome da pessoa mais velha: ')
let olderPersonAge = prompt('Digite a idade da pessoa mais velha: ')

// reads the name and age fot the younger person
let youngerPersonName = prompt('Digite o nome da pessoa mais nova: ')
let youngerPersonAge = prompt('Digite a idade da pessoa mais nova: ')

let ageDifference = olderPersonAge - youngerPersonAge

alert('Pessoa mais velha: ' + olderPersonName + '\nidade: ' + olderPersonAge +
  '\n\nPessoa mais nova: ' + youngerPersonName + '\nIdade: ' + youngerPersonAge +
  '\n\nDiferença de Idade: ' + ageDifference
)