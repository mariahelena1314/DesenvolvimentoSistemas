// 13. Elabore um programa em que dada a idade de um nadador classifique-o em uma das seguintes categorias:

// Infantil A = 5 - 7 anos
// Infantil B = 8 - 10 anos
// Juvenil A = 11-13 anos
// Juvenil B = 14-17 anos
// Adulto = maiores de 18 anos
// OBS: A idade fornecida pelo usuário deve estar entre 0 e 120 anos. Caso contrário o programa deve emitir uma mensagem de erro.

let idade = 16;


if ( idade >= 5 && idade <= 7 ){
    console.log(' Infantil A ');
}
else if ( idade >= 8 && idade <= 10 ){
    console.log(' Infantil B ');
}
else if ( idade >= 11 && idade <= 13 ){
    console.log(' Juvenil A ');
}else if ( idade >= 14 && idade <= 17 ){
    console.log(' Juvenil B ');
}else if ( idade > 18 && idade < 120 ){
    console.log(' Adulto ');
}
else if ( idade < 0 || idade > 120){
    console.log('ERRO!  Esta idade não é aprovada!');
    
}
