// 11. Crie um array de números e use reduce() para calcular a soma de todos os elementos. 

let numeros = [ 2, 3, 5, 6];

let soma = numeros.reduce ((acumulador, numero) => acumulador + numero, 0);

console.log(soma);
