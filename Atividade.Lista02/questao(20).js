// 20. Crie uma função chamada somaDigitosPrimos que receba um número inteiro positivo e retorne a soma dos dígitos que são números primos.

function somaDigitosPrimos ( n1,n2,n3 ){
    if ( n1 > 0  ){
        return n1 + n2 + n3
    }
    if (n1 % n1 == 0) {
        return n1 + n2 + n3
        }
    if ( n1 % 1 == 0){
        return n1 + n2 + n3
        }
    else{
       
        return ("algum numero nao é primo ")
    }
}
console.log(somaDigitosPrimos(13, 10, 1));
