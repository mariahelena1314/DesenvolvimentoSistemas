//6. Crie uma função chamada maiorNumero que receba um 3 números e retorne o maior valor.


function maiorNumero(n1,n2,n3) {
   if (n1 > n2 && n1 > n3 ){
    return (n1)
   } if (n2 > n1 && n2 > n3 ){
    return (n2)
   } if (n3 < n1 && n3 < n2 ){
    return (n3)
   }

   
}

console.log(" O maior numero é: " +  maiorNumero(9 ,11 ,3));
