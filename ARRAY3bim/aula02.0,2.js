let frutas = ['maçã' , 'Banana' , 'Laranja'];

let indice = frutas.indexOf('Banana');

// se o indice retornado for diferente de -1, mude, atraves do indice, 'uva

if(indice !== -1){
    frutas[indice] = 'uva'
    frutas.unshift('Bergamota');
    frutas.push('Tangerina')

    //frutas.splice(indice,1);
}

console.log(frutas);
