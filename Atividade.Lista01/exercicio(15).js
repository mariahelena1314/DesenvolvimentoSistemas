// 15. Faça um programa que leia 3 valores e verifique se todos são inteiros e positivos, em seguida exiba quais deles são inteiros ou não e positivos ou negativos.

let a = 10;
let b = -3;
let c = 5.5;

// Verificando A
if (a % 1 === 0) {
  console.log("a é inteiro");
} else {
  console.log("a não é inteiro");
}

if (a >= 0) {
  console.log("a é positivo");
} else {
  console.log("a é negativo");
}

// Verificando B
if (b % 1 === 0) {
  console.log("b é inteiro");
} else {
  console.log("b não é inteiro");
}

if (b >= 0) {
  console.log("b é positivo");
} else {
  console.log("b é negativo");
}

// Verificando C
if (c % 1 === 0) {
  console.log("c é inteiro");
} else {
  console.log("c não é inteiro");
}

if (c >= 0) {
  console.log("c é positivo");
} else {
  console.log("c é negativo");
}