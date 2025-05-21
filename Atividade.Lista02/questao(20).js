// 20. Crie uma função chamada somaDigitosPrimos que receba um número inteiro positivo e retorne a soma dos dígitos que são números primos.

function somaDigitosPrimos ( n1,n2 ){
    let numerosPrimos 
    if ( n1 % 2 == 1){
        return n1 + n2 
    }
    else{
        return " esse nuumero nao "
    }
}
console.log(somaDigitosPrimos(13, 12));
