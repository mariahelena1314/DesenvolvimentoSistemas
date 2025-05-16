// Faça um programa que solicite qual a média o estudante quer calcular, para isso exiba um menu com as seguintes opções: (1) aritmética simples, (2) aritmética ponderada e (3) sair. Implemente todas as opções, exibindo se o estudante está aprovado (nota maior ou igual a 60), em recuperação (nota entre 40 e 59) e reprovado (nota inferior a 40). 

let opcao = '2';

switch (opcao) {
  case '1':
    let nota1 = 10;
    let nota2 = 4;
    let mediaSimples = (Number(nota1) + Number(nota2)) / 2;

    console.log("Média Aritmética Simples: " + mediaSimples);

    if (mediaSimples >= 6) {
      console.log("Situação: Aprovado");
    } else if (mediaSimples >= 4) {
      console.log("Situação: Recuperação");
    } else {
      console.log("Situação: Reprovado");
    }
    break;

  case '2':
    let n1 = 7;
    let p1 = 1;
    let n2 = 6;
    let p2 = 2;

    let mediaPonderada = ((n1 * p1 + n2* p2) / (p1 + p2));

    console.log("Média Aritmética Ponderada: " + mediaPonderada);

    if (mediaPonderada >= 6) {
      console.log("Situação: Aprovado");
    } else if (mediaPonderada >= 4) {
      console.log("Situação: Recuperação");
    } else {
      console.log("Situação: Reprovado");
    }
    break;

  case "3":
    console.log("Saindo do programa...");
    break;

  default:
    console.log("Opção inválida.");
}