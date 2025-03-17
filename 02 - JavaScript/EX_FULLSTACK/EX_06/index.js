let anosLuz = parseInt(prompt("Digite a velocidade em ANOS-LUZ que deseja converter:"));
let opcaoEscolhida = parseInt(prompt("Escolha a opção de conversão: \nPARSEC (PC) [1] - \nUNIDADE AUSTRONONIMA (AU) [2] - \nKILOMETROS (KM) [3]"))

let unidadeEscolhida; // As variáveis são declaradas, mas ainda não têm valores atribuídos. Os valores serão definidos com base na escolha do usuário.
let distanciaConvertida;

switch (opcaoEscolhida) {
  case 1:
    unidadeEscolhida = "Parsec"
    distanciaConvertida = anosLuz * 0.306601;
    break;
  case 2:
    unidadeEscolhida = "Unidade Austronômica"
    distanciaConvertida = anosLuz * 63241, 1;
    break;
  case 3:
    unidadeEscolhida = "Kilometro";
    distanciaConvertida = anosLuz * 9.5 * Math.pow(10, 12);
    break;
  default:
    unidadeEscolhida = "Unidade Não Identificada!"
    distanciaConvertida = "Conversão fora do escopo"
}

alert("Distancia em Anos-Luz: " + anosLuz + "\n" + unidadeEscolhida + ": " + distanciaConvertida)