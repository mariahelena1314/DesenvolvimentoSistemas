// 18. Elabora uma função que calcule o valor do frete de uma encomenda a partir do peso da mesma. O quilo vale R$ 2,89. Retorne o valor do frete fornecendo apenas o peso da encomenda a função.

function valorQuilo(peso){
    let quilo = 2.89;
    return peso * quilo 
}
console.log( " O valor final com o frete foi : " + valorQuilo (10));
