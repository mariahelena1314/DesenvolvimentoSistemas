// 9. Faça um programa que determine se um determinado ano lido é bissexto. Sendo que um ano é bissexto se for divisível por 400 ou se for divisível por 4 e não for divisível por 100. ex: 1988,
1992, 1996.

let ano = 1996;

if( ano % 400 == 0 || (ano %  4 == 0 && ano != 0)){
    console.log(ano + ' é um ano bissexto');
}

else {
    console.log( ' O ano: ' + ano + ' NÃO é bissexto!');
    
}