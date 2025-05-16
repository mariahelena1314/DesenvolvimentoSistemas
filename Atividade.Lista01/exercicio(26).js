// Faça um programa que leia o nome de 2 times e o número de gols marcados na partida (para cada time). Escrever o nome do vencedor. Caso não haja vencedor deverá ser impressa a palavra EMPATE. 

let time1 = 'Flamengo';
let gol1 = 8;

let time2 = 'São Paulo';
let gol2 = 4;

if (gol1 > gol2) {
  console.log("Vencedor: " + time1);
} else if (gol2 > gol1) {
  console.log("Vencedor: " + time2);
} else {
  console.log("EMPATE");}