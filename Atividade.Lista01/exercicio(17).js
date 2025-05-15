//17. Faça um programa que leia 3 valores a, b e c, inteiros e positivos, verifique se esses valores formam um triângulo retângulo. Lembre-se do Teorema de Pitágoras que diz: “Em qualquer triângulo retângulo, o quadrado do comprimento da hipotenusa é igual à soma dos quadrados dos comprimentos dos catetos.”


let a = 3;
let b = 4;
let c = 5; 


if (a > 0 && b > 0 && c > 0) {
  if (c * c === a * a + b * b) {
    console.log("É um triângulo retângulo");
  } else {
    console.log("Não é um triângulo retângulo");
  }
} else {
  console.log("Todos os valores devem ser positivos");
}