// 22. Faça um programa que solicite a hora e exiba a saída de acordo com a tabela abaixo:
// Hora Saída
// 5h até 12h Turno matutino
// 13h até 19h Turno vespertino
// 20h até 24h Turno noturno
// Demais Turno inválido

let hora = 2;

if ( hora >= 5 && hora <= 12){
    console.log(' Turno Matutino!');
}

else if ( hora >= 13 && hora <= 19){
    console.log(' Turno Vespertino!');
}

else if ( hora >= 20 && hora <= 24){
    console.log('Turno Noturno!');   
}

else {
    console.log(' Valor Invalido!');
    
}