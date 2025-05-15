// 3. Faça um programa que leia 3 números inteiros e apresente o maior deles.

let n1 = 19;
let n2 = 5;
let n3 = 2;
let maior;

if(n1 > n2){
    maior = n1;
}
else {
    maior= n2;
}

if( n3 > maior){
    maior = n3;
}

console.log(` O maior número é: ${maior}`);