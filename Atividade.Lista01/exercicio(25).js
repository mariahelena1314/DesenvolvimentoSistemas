// Faça um programa que leia o ano atual e o ano de nascimento de uma pessoa e em seguida exiba uma mensagem que diga se ela poderá ou não votar este ano (não é necessário considerar o mês em que a pessoa nasceu). 

let anoAtual = 2025;
let anoNascimento = 2007;
let idade;

idade = anoAtual - anoNascimento;

if (idade >= 14) {
  console.log(" pode votar este ano.");
} 
else {
  console.log(" NÃO pode votar este ano.");
}