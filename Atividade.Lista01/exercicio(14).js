//14. Faça um programa que calcule a média entre 3 notas se e somente se essas notas forem válidas. Uma nota é considerada válida se ela for maior ou igual a zero e menor ou igual a cem (0<= nota <=100).


function notaValida(nota) {
    return nota >= 0 && nota <= 100;
}


let nota1 = 30;
let nota2 = 30;
let nota3 = 30; 

if (notaValida(nota1) && notaValida(nota2) && notaValida(nota3)) {
    let media = (nota1 + nota2 + nota3) / 3 ; 
    console.log(` A media das notas é: ${media}`);
}

else{
    console.log( 'ERRO!  notas invalidas!');
    
}
