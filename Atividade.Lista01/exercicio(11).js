// 11. Faça um programa que receba o peso e a altura de um usuário e calcule o IMC (índice de massa corpórea). O IMC é definido por peso / (altura * altura). Escreva no console a situação do paciente baseada na tabela abaixo. Cálculo IMC Situação
//Abaixo de 18,5 Você está abaixo do peso ideal
//Entre 18,5 e 24,9 Parabéns — você está em seu peso normal!
//Entre 25,0 e 29,9 Você está acima de seu peso (sobrepeso)
//Entre 30,0 e 34,9 Obesidade grau I
//Entre 35,0 e 39,9 Obesidade grau II
//40,0 e acima Obesidade grau III.

let peso = 75;
let altura = 1.54;
let IMC;

IMC = peso / (altura * altura);

if( IMC < 18.5){
    console.log(' Você está abaixo do peso ideal ');
}

else if ( IMC >= 18.5 && IMC <= 24.9 ){
    console.log(' Parabens, voçê está em seu peso normal!');
}

else if ( IMC >= 25.0 && IMC <= 29.9 ){
    console.log( ' Voçê está acima do seu peso, (Sobrepeso)');
}

else if ( IMC >= 30.0 && IMC <= 34.9){
    console.log( 'Obesidade grau I ');   
}

else if ( IMC >= 35.0 && IMC <= 39.9){
    console.log( 'Obesidade grau II ');   
}

else {
    console.log( 'Obesidade grau III ');   
}


